# web
FROM fbg-common:latest AS common
FROM node:14.2.0-buster
RUN groupadd -g 999 appuser && useradd -m -d /appdata -r -u 999 -g appuser appuser
RUN rm /bin/su
USER appuser

# install and cache app dependencies
COPY --chown=appuser tsconfig.json package.json yarn.lock /appdata/
WORKDIR /appdata
RUN yarn install

# config
COPY --chown=appuser tsconfig.server.json webpack.server.config.js /appdata/

# build server
COPY --chown=appuser src /appdata/src
COPY --chown=appuser server /appdata/server
RUN yarn run build:server

# build website
ARG GA_TRACKING_CODE
ARG GTM_ID
ARG BGIO_SERVER_URL
ARG GIT_REV
ARG SENTRY_DSN
COPY --chown=appuser .babelrc next.config.js /appdata/
COPY --chown=appuser static /appdata/static
COPY --chown=appuser .storybook /appdata/.storybook
RUN yarn run build

COPY --chown=appuser docker_run.sh /appdata/

# internal configs for FreeBoardGames.org
COPY --chown=appuser --from=common /internal /internal

# run
CMD ./docker_run.sh
