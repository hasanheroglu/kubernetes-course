FROM node:20-alpine
WORKDIR /logOutput

COPY . .

RUN npm ci

CMD ["npm", "run", "start"]