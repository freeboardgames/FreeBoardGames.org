FROM node:11-stretch
EXPOSE 8000
# do not run our app as root
ADD . /appdata
RUN mkdir /appdata/node_modules
RUN groupadd -g 999 appuser && useradd -m -r -u 999 -g appuser appuser
RUN chown -hR appuser /appdata
VOLUME /appdata/node_modules
USER appuser
WORKDIR /appdata
# add node_modules to PATH
ENV PATH /appdata/node_modules/.bin:$PATH
# install and cache app dependencies
RUN yarn install
# start app
CMD ["yarn", "run", "dev"]
