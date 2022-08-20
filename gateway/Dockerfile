# Base image
FROM node:14.17-alpine3.12

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# App Environment variables
ENV BROKERHOST=localhost
ENV BROKERPORT=6379

# expose on port
EXPOSE 3000

# Start the server using the production build
CMD [ "node", "dist/main.js" ]