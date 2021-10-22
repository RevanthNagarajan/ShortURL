const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { persistentData } = require('./app/constants/urls.js');

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
    mongoose.connection.db.collection('urls').insertMany(persistentData).then(obj => console.log("Data inserted"));
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



require('./app/routes/url.routes')(app);
app.use(express.static(__dirname+'/build'));
// app.get('/', (req, res) => {
//     console.log("Welcome to url application!")
//     res.json({"message": "Welcome to url application!"});
// });

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

module.exports = app.listen(3030, function() {
    console.log('listening on 3030')
})