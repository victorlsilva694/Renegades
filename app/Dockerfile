FROM node:14.17.4-stretch

WORKDIR /home/back

COPY package*.json ./

RUN npm -v

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

EXPOSE 3001