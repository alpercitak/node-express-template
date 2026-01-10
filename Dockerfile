FROM node:25-alpine

RUN npm i -g pnpm

WORKDIR /usr/app

COPY ./package*.json .
COPY ./pnpm-lock.yaml .

RUN pnpm i --prod --frozen-lockfile --ignore-scripts=true

COPY . .

EXPOSE ${PORT}
CMD [ "node", "app.js" ]