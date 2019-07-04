FROM node:12-stretch
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
COPY --chown=appuser package.json /appdata
COPY --chown=appuser yarn.lock /appdata
WORKDIR /appdata
RUN yarn install
COPY --chown=appuser blog/package.json /appdata/blog
COPY --chown=appuser blog/yarn.lock /appdata/blog
WORKDIR /appdata/blog
RUN yarn install

# build app
WORKDIR /appdata
COPY --chown=appuser . /appdata
RUN yarn prod:build

# for blog:
WORKDIR /appdata/blog/
RUN yarn run hexo generate
WORKDIR /appdata

# start server
CMD ["./docker_run.bash"]
