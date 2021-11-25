FROM node:16-alpine
WORKDIR /usr/src/app/https-frontend
COPY https-frontend/package*.json ./
RUN npm install
WORKDIR /usr/src/app
COPY . .
WORKDIR /usr/src/app/https-frontend
EXPOSE 50051
CMD ["npm", "start"]