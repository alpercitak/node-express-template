FROM node:14-alpine

WORKDIR /usr/app

COPY ./package*.json .

RUN npm ci --only=production
RUN npm i -g nodemon

COPY . .

EXPOSE ${PORT}
CMD [ "nodemon", "app.js"]