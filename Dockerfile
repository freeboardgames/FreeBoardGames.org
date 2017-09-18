FROM node:boron
ENV NODE_ENV production
ENV PORT 80
ENV MONGODB_URI mongodb://mongo-0.mongo/turnato

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 80
CMD [ "npm", "start" ]
