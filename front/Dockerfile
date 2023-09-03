FROM node:18.17.0-alpine3.18
WORKDIR /usr/src/app

COPY package.json /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install
