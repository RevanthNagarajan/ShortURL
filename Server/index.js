const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(express.json());

// Configuring the database
const dbConfig = require('./config/db.config.js');


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

require('./app/routes/url.routes')(app);

app.get('/', (req, res) => {
    console.log("Welcome to url application!")
    res.json({"message": "Welcome to url application!"});
});

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../Web/build', 'index.html'));
// });

app.listen(3030, function() {
    console.log('listening on 3030')
})