FROM node:20

WORKDIR /my-app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci
    
COPY ./ ./

EXPOSE 5173
