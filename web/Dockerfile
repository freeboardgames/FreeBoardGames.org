# web
FROM fbg-common:latest AS common
FROM node:14.15.0-alpine3.12 AS builder
RUN apk add --no-cache autoconf automake file g++ libtool make nasm libpng-dev libc6-compat
RUN addgroup -g 998 appuser && adduser -h /appdata -S -u 997 -G appuser appuser
RUN rm /bin/su
USER appuser

# install and cache app dependencies
COPY --chown=appuser tsconfig.json package.json yarn.lock /appdata/
WORKDIR /appdata
RUN yarn install  && yarn cache clean

# config
COPY --chown=appuser tsconfig.server.json webpack.server.config.js /appdata/

# build server
COPY --chown=appuser src /appdata/src
COPY --chown=appuser server /appdata/server
RUN yarn run build:server

# build website
ARG GIT_REV
COPY --chown=appuser .babelrc next.config.js /appdata/
COPY --chown=appuser public /appdata/public
COPY --chown=appuser .storybook /appdata/.storybook
COPY --chown=appuser docs /appdata/docs
RUN yarn run build

FROM node:14.15.0-alpine3.12
RUN addgroup -g 998 appuser && adduser -h /appdata -S -u 997 -G appuser appuser
RUN rm /bin/su
USER appuser
WORKDIR /appdata

COPY --chown=appuser package.json /appdata/
RUN yarn install --production && yarn cache clean
COPY --chown=appuser public /appdata/public
COPY --chown=appuser --from=builder /appdata/server /appdata/
COPY --chown=appuser docker_run.sh /appdata/

# internal configs for FreeBoardGames.org
COPY --chown=appuser --from=common /internal /internal

# run
CMD ./docker_run.sh
