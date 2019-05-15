FROM node:11-stretch
ARG BGIO_SERVER_URL
EXPOSE 8000
EXPOSE 8001
# do not run our app as root
ADD . /appdata
RUN groupadd -g 999 appuser && useradd -m -r -u 999 -g appuser appuser
RUN chown -hR appuser /appdata
USER appuser
WORKDIR /appdata
# add node_modules to PATH
ENV PATH /appdata/node_modules/.bin:$PATH

# for fbg app:
# install and cache app dependencies
RUN yarn install
# build app
RUN yarn prod:build

# for blog:
WORKDIR /appdata/blog/
RUN yarn install
RUN yarn run hexo generate

WORKDIR /appdata

# start server
CMD ["./docker_run.bash"]
