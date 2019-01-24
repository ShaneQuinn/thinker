FROM node:8

# Create app directory
WORKDIR /

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Bundle app source
COPY . ./

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]






