FROM node:16-alpine
WORKDIR /usr/src/app/grpc-backend
COPY package*.json ./
RUN npm install
WORKDIR /usr/src/app
COPY . .
WORKDIR /usr/src/app/grpc-backend
EXPOSE 50051
CMD ["npm", "start"]