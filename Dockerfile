FROM node:14
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY . .
 
RUN npm run install && \
    npm run docker-build

COPY ./Web/build ./Server

RUN rm -rf ./Web

#Expose port and start application
EXPOSE 3030
CMD [ "node", "Server/index.js" ]