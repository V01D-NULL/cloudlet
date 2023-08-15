FROM node:18

WORKDIR /dist

COPY package.json tsconfig.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "start"]