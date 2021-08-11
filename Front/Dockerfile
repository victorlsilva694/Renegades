FROM node:14.17.4-stretch

WORKDIR /home/front

COPY package*.json ./

RUN npm -v

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

EXPOSE 3000
