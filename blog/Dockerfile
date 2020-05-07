# blog
FROM node:13.13.0-buster as blog

RUN groupadd -g 999 appuser && useradd -m -d /appdata -r -u 999 -g appuser appuser
RUN rm /bin/su
USER appuser
RUN mkdir -p /appdata

# add node_modules to PATH
ENV PATH /appdata/node_modules/.bin:$PATH

COPY --chown=appuser yarn.lock /appdata
COPY --chown=appuser package.json /appdata
WORKDIR /appdata
RUN yarn install

# build blog:
COPY --chown=appuser scaffolds /appdata/scaffolds
COPY --chown=appuser themes /appdata/themes
COPY --chown=appuser _config.yml /appdata/
COPY --chown=appuser source /appdata/source
RUN yarn run hexo generate

# web
FROM nginx:1.18.0-alpine as web

# copy in our blog
COPY --from=blog /appdata/dist /usr/share/nginx/html/blog
