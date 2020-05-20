# web
FROM fbg-common:latest AS common
FROM node:14.2.0-buster
RUN groupadd -g 999 appuser && useradd -m -d /appdata -r -u 999 -g appuser appuser
RUN rm /bin/su
USER appuser

# install and cache app dependencies
COPY --chown=appuser package.json yarn.lock /appdata/
WORKDIR /appdata
RUN yarn install

# config
COPY --chown=appuser tsconfig.json tsconfig.build.json nest-cli.json /appdata/

# build
COPY --chown=appuser src /appdata/src
COPY --chown=appuser --from=common /dto /appdata/src/dto
RUN yarn run build

# run
CMD yarn run start:prod

