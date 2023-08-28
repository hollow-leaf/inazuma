FROM node:16-alpine3.18

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npx","env-cmd", "node", "server.js" ]