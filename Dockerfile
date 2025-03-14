FROM node:20.10.0-alpine

WORKDIR /app

COPY package*.json .
RUN npm i

COPY . .

CMD [ "npm", "run", "dev" ]