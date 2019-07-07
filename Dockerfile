FROM node:12.6.0-stretch
ARG BGIO_SERVER_URL
EXPOSE 8000
EXPOSE 8001

# do not run as root
RUN groupadd -g 999 appuser && useradd -m -r -u 999 -g appuser appuser
RUN mkdir -p /appdata/blog
RUN chown -hR appuser /appdata
USER appuser

# add node_modules to PATH
ENV PATH /appdata/node_modules/.bin:$PATH

# install and cache app dependencies
COPY --chown=appuser package.json yarn.lock /appdata/
WORKDIR /appdata
RUN yarn install
COPY --chown=appuser blog/package.json /appdata/blog
COPY --chown=appuser blog/yarn.lock /appdata/blog
WORKDIR /appdata/blog
RUN yarn install

# for blog:
COPY --chown=appuser blog /appdata/blog
WORKDIR /appdata/blog/
RUN yarn run hexo generate
WORKDIR /appdata


# build app
WORKDIR /appdata
COPY --chown=appuser docker_run.bash tsconfig.json webpack.common.js webpack.prod.js webpack.server.js package.json yarn.lock /appdata/
COPY --chown=appuser static /appdata/static
COPY --chown=appuser @types /appdata/@types
COPY --chown=appuser i18n /appdata/i18n
COPY --chown=appuser src /appdata/src
RUN yarn prod:build

# start server
CMD ["./docker_run.bash"]
