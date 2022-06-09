FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm --openssl-legacy-provider install
COPY . .

CMD ["npm", "run", "dev"]
