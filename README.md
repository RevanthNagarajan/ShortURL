# ShortURL
URL compressor app

### 1: RUN APP IN LOCAL
 Execute the following commands from the project folder.

      1. npm run install (This installs the dependencies for both web and api)
      2. npm start (This runs express server at port 3030 and starts react app at 3000. 
      The react app requests will be proxied throuph port 3030). The UI app can be 
      accessed through localhost:3000 and api can be accessed at http://localhost:3030/{routes_specified}_
   

      NOTE : Edit the Mongodb url to an active mongodb cluster in /Server/config/db.config.js is you are not 
      performing this operation through docker compose. If you are trying to start the server not the 
      first time comment out the following command in  Server/index.js.
      /*mongoose.connection.db.collection('urls').insertMany(persistentData).then(obj => console.log("Data inserted"));*/
      This line off code is written to create a collection bitly.urls and insert sample documents to test the application.  
   
### 2 : RUN SSR with prod build
 Execute the following commands from the project folder.

    1. npm run install (This installs the dependencies for both web and api) - if not done already
    2. npm run build(This builds the react app and places the build folder in the Web inside the Server folder).
    3. npm run serve (This runs the backend server and the UI app can be accessed at http://localhost:3030/).
   
      NOTE : Edit the Mongodb url to an active mongodb cluster in /Server/config/db.config.js is you are not 
      performing this operation through docker compose. If you are trying to start the server not the 
      first time comment out the following command in Server/index.js.
      /*mongoose.connection.db.collection('urls').insertMany(persistentData).then(obj => console.log("Data inserted"));*/
      This line off code is written to create a collection bitly.urls and insert sample documents to test the application.  
   
### 3 : RUN with docker compose
 Execute the following command from the project folder.
 
      1. docker-compose up*** (This will create and runs images built for the SSR app with Method 2 above 
      and starts mongo image). Once the containers are started access the app at http://localhost:3030
   
### 4 : RUN unit tests
 Execute the following command from the project folder.

      1. npm run test-api
      2. npm run test-ui
