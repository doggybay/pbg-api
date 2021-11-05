FROM node:14-buster

# app directory

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

copy . .

EXPOSE 5000

CMD [ "npm", "run", "dev" ]