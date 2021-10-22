const URLSchema = require('../models/url.model.js');

exports.findURL = (req, res) => {
    URLSchema.find()
    .then(urls => {
        res.send(urls || []);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving urls."
        });
    });
};

// Create and Save a new URL
exports.createURL = (req, res) => {
    if(!req.body || !req.body.url || !req.body.shortUrl || !req.body.title) {
        return res.status(400).send({
            message: "URL content can not be empty"
        });
    }
    const urlData = req.body;
    const url = new URLSchema({...urlData});
    url.createdAt = new Date();
    
    url.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the URL."
        });
    });
};

exports.redirect = (req, res) => {
    console.log(req.originalUrl.split("/rd/"))
    URLSchema.where( { shortUrl: req.originalUrl.split("/rd/")[1] }).findOne()
    .then(url => {
        if(!url) {
            return res.status(404).send({
                message: "URL not found with id " + req.originalUrl.split("/rd/")[1]
            });            
        }
        console.log(url)
        res.redirect(url.url);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "URL not found with id " + req.originalUrl.split("/rd/")[1]
            });                
        }
        return res.status(500).send({
            message: "Error retrieving url with id " + req.originalUrl.split("/rd/")[1]
        });
    });
};