# pull official base image
FROM node:16.8-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json .
RUN npm install --legacy-peer-deps
RUN npm install react-scripts 

# add app
COPY . .

# start app
CMD ["npm", "start"]
