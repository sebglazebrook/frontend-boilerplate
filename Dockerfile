FROM node:10.8.0

WORKDIR /app

COPY yarn* /app/

RUN yarn install

COPY . /app/

CMD yarn start
