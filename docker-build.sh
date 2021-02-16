#!/bin/bash
# define paths
SCRIPT=$(readlink -f "$0")
DIR=$(dirname "$SCRIPT")
BUILD_FBG="$DIR/fbg-server"
EXPORT_FILE="freeboardgames.tar"

## read docker build paths and image names from env file
if [ ! -f .env ]; then
    echo -e "No .env file found"
    exit 1
else
    source .env
fi

# ensure a docker-compose.yml is present
if [ ! -f docker-compose.yml ]; then
    cp docker-compose.yml.example docker-compose.yml
fi

# ensure yarn and npm are installed
yarn -v > /dev/null 2>&1 || (echo "ERROR: yarn is not installed." && exit 1)
npm -v > /dev/null 2>&1  || (echo "ERROR: npm is not installed." && exit 1)

# define functions
confirm() {
    # call with a prompt string or use a default
    read -r -p "$@"" [y/N]: " response
    case "$response" in
        [yY][eE][sS]|[yY])
            return 0
            ;;
        *)
            return 1
            ;;
    esac
}

run_gameserver() {
    cd "$DIR"
    echo -e "Now the webserver and backend will be started."
    yarn run gen:games || (echo -e "ERROR. (ensure node is up-to-date)" && exit 1)
}

install_dependencies() {
    cd "$DIR"
    yarn install || (echo -e "ERROR. (ensure node is up-to-date)" && exit 1)
}

compile_dependencies() {
    cd "$DIR"
    install_dependencies && run_gameserver || exit 1
}

build_docker() {
    cd "$DIR"
    docker build -t "$BUILD_IMAGE_COMMON" "$BUILD_DIR_COMMON"
    docker build -t "$BUILD_IMAGE_WEB" "$BUILD_DIR_WEB"
    docker build -t "$BUILD_IMAGE_FBG" "$BUILD_DIR_FBG"
}

prune_docker_images() {
    PRUNE_IMAGES=$(docker images --format '{{.Repository}}:{{.Tag}}' | grep freeboardgames/)
    echo -e "$PRUNE_IMAGES"
    if $(confirm "Delete listed docker images?") ; then
        echo "$PRUNE_IMAGES" | xargs docker rmi
    fi
}

exportdocker() {
    cd "$DIR"
    EXP_IMAGES=$(docker images --format '{{.Repository}}:{{.Tag}}' | grep freeboardgames/)
    echo -e "Exporting :\n\n$EXP_IMAGES \n\ninto $EXPORT_FILE"
    docker save ${EXP_IMAGES} -o $EXPORT_FILE
}

importdocker() {
    cd "$DIR"
    echo -e "Importing $EXPORT_FILE"
    docker load -i $EXPORT_FILE
}

# ###### Parsing arguments
#Usage print
usage() {
    echo "Usage: $0 -[d|b|e|i|r|h]" >&2
    echo "
   -d,    Installs dependencies and run the webserver and backend.
   -b,    Build docker image
   -e,    Export build docker images
   -i,    Import docker images
   -r,    Prune docker images
   -h,    Print this help text

If the script will be called without parameters, it will run:
    $0 -d -b
   ">&2
    exit 1
}

while getopts ':dbeir' opt
do
case "$opt" in
   'd')compile_dependencies;
       ;;
   'b')build_docker;
       ;;
   'e')exportdocker;
       ;;
   'i')importdocker;
       ;;
   'r')prune_docker_images;
       ;;
    *) usage;
       ;;
esac
done

# Executed when no arguments passed
if [ $OPTIND -eq 1 ]; then
    if $(confirm "Install dependencies and run the webserver and backend?") ; then
        compile_dependencies
    fi
    if $(confirm "Build docker image?") ; then
        build_docker
    fi
fi