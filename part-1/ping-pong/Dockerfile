FROM node:20-alpine
WORKDIR /pingpong

COPY . .

RUN npm ci

CMD ["npm", "run", "start"]