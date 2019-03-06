FROM node:latest

WORKDIR /usr/src/
COPY bot ./
WORKDIR ./bot
RUN npm install
ENTRYPOINT [ "npm", "start", "BOT_TOKEN"]