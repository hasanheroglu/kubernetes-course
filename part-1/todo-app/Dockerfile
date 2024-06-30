FROM node:20-alpine
WORKDIR /todo-app

COPY . .

RUN npm ci
CMD ["npm", "run", "start"]