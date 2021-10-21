module.exports = (app) => {
    const url = require('../controllers/url.controller.js');

    // GET URL
    app.get('/api/getURL',url.findURL);
    app.post('/api/createURL',url.createURL);

    app.get('/rd/*',url.redirect);
}