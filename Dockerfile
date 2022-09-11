FROM node:14-alpine as builder
ENV NODE_ENV=development \
    PORT=3000 \
    SHELL=/bin/bash
RUN apk update && apk add --no-cache make git gnupg bash python3 py3-pip g++ && \
    rm -rf /var/cache/apk/*

# Create app directory
WORKDIR /usr/app

# Install app dependencies
COPY . ./
RUN npm set progress=false && npm install
VOLUME /usr/app
EXPOSE $PORT
CMD ["npm", "run", "start"]
