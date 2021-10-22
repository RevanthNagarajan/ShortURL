const chai =  require('chai');
const chaiHttp =  require('chai-http');
const app =  require('../index.js');
const createURLMock = require('./beans/url.js')
chai.use(chaiHttp);
chai.should();

describe("***** API TEST BEGINS *****", () => {
    console.log("CONNECT TO A RUNNING MONGODB INSTANCE TO RUN THE TESTS")
    it("Should get all url records", (done) => {
        chai.request(app)
            .get('/api/getURL')
            .end((err, res) => {
                if(err) console.log("ERROR ",err)
                res.should.have.status(200);
                res.body.should.be.a('Array');
                done();
             });
    });

    it("Should reject Insert if the url entry doesn't have a Title or URL or Short URL", (done) => {
        chai.request(app)
            .post('/api/createURL',{ body : createURLMock.createInvalidMock})
            .end((err, res) => {
                if(err) console.log("ERROR ",err)
                res.should.have.status(400);
                done();
             });
    });

    it("Should reject Insert if the request body is empty", (done) => {
        chai.request(app)
            .post('/api/createURL',{ body : {}})
            .end((err, res) => {
                if(err) console.log("ERROR ",err)
                res.should.have.status(400);
                done();
             });
    });
})