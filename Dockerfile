FROM node:14-buster

# app directory

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run migrate

RUN npm run seed

EXPOSE 5000

CMD [ "npm", "run", "dev" ]