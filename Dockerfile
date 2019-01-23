FROM node:8.15.0-jessie

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . ./

EXPOSE 3000:80
CMD ["npm", "start"]






