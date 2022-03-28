# fbg-server
FROM fbg-common:latest AS common
FROM node:16.14-alpine3.14 AS builder
RUN addgroup -g 938 appuser && adduser -h /appdata -S -u 997 -G appuser appuser && rm /bin/su
USER appuser
WORKDIR /appdata

# install and cache app dependencies
COPY --chown=appuser package.json yarn.lock /appdata/
RUN yarn install && yarn cache clean

# config
COPY --chown=appuser tsconfig.json tsconfig.build.json nest-cli.json /appdata/

# build
COPY --chown=appuser src /appdata/src
RUN yarn run build

FROM node:16.14-alpine3.14
RUN addgroup -g 938 appuser && adduser -h /appdata -S -u 997 -G appuser appuser && rm /bin/su
USER appuser
WORKDIR /appdata

COPY --chown=appuser package.json yarn.lock /appdata/
RUN yarn install --production && yarn cache clean

COPY --chown=appuser tsconfig.json tsconfig.build.json nest-cli.json /appdata/
COPY --chown=appuser --from=builder /appdata/dist /appdata/dist
# internal configs for FreeBoardGames.org
COPY --chown=appuser --from=common /internal /internal
COPY --chown=appuser --from=common /common /common

# run
CMD yarn run start:prod
