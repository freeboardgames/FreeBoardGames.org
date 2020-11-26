# fbg-server
FROM fbg-common:latest AS common
FROM node:14.15.0-alpine3.12 AS builder
RUN addgroup -g 998 appuser && adduser -h /appdata -S -u 997 -G appuser appuser
RUN rm /bin/su
USER appuser

# install and cache app dependencies
COPY --chown=appuser package.json yarn.lock /appdata/
WORKDIR /appdata
RUN yarn install && yarn cache clean

# config
COPY --chown=appuser tsconfig.json tsconfig.build.json nest-cli.json /appdata/

# build
COPY --chown=appuser src /appdata/src
RUN yarn run build

FROM node:14.15.0-alpine3.12
RUN addgroup -g 998 appuser && adduser -h /appdata -S -u 997 -G appuser appuser
RUN rm /bin/su
USER appuser
WORKDIR /appdata

COPY --chown=appuser package.json /appdata/
RUN yarn install --production && yarn cache clean
COPY --chown=appuser --from=builder /appdata/dist /appdata/
# internal configs for FreeBoardGames.org
COPY --chown=appuser --from=common /internal /internal
COPY --chown=appuser --from=common /common /common

# run
CMD yarn run start:prod
