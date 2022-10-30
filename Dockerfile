FROM node:18.0.0 AS build
RUN npm install -g http-server
WORKDIR /app
COPY package.json ./
RUN apt-get update
COPY . .
RUN npm install --force
RUN npm run build
EXPOSE 8080
CMD [ "http-server", "dist" ]
