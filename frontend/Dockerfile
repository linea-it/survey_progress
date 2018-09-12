
FROM node:8

WORKDIR /app

COPY . .

RUN yarn --ignore-optional

RUN yarn run build

ENTRYPOINT ./entrypoint.sh
