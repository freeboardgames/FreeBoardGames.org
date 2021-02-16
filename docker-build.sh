#!/bin/bash
# define paths
SCRIPT=$(readlink -f "$0")
DIR=$(dirname "$SCRIPT")
BUILD_COMMON="$DIR/common"
BUILD_FBG="$DIR/fbg-server"
EXPORT_FILE="freeboardgames.tar"

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

install_fbg() {
    cd "$BUILD_FBG"
    read -p "Now fbg will be installed and started. Shut down the server after startup with CTRL+C. [PROCEED]"
    yarn install && yarn start || exit 1
}

run_gameserver() {
    cd "$DIR"
    read -p "Now the webserver and backend will start. Shut down the server after startup with CTRL+C. [PROCEED]"
    yarn run dev || (echo -e "ERROR. (ensure node is up-to-date)" && exit 1)
}

install_dependencies() {
    cd "$DIR"
    yarn install || (echo -e "ERROR. (ensure node is up-to-date)" && exit 1)
}

compile_dependencies() {
    cd "$DIR"
    install_dependencies && run_gameserver || exit 1
}

build_common_docker() {
    cd "$BUILD_COMMON"
    docker build -t fbg-common:latest .
}

build_docker() {
    build_common_docker

    cd "$DIR"

    docker-compose build
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
    echo "Usage: $0 -[d|b|e|i|h]" >&2
    echo "
   -d,    Installs dependencies and run the webserver and backend.
   -b,    Build docker image
   -e,    Export build docker images
   -i,    Import docker images
   -h,    Print this help text

If the script will be called without parameters, it will run:
    $0 -d -b
   ">&2
    exit 1
}

while getopts ':dbei' opt
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