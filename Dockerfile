FROM node:14-buster

# app directory

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "PORT=5000", "run", "dev" ]