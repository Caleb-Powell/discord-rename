FROM node:16-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

RUN npm config set unsafe-perm true

COPY package*.json ./

RUN npm install

COPY . /home/node/app/

CMD [ "npm", "start" ]