const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../index');
var expect = chai.expect;
var request = require("request");


describe("NodeWebApp API Tests", function() {
    
    describe("Home page respond with status 200", function() {
        it('returns status 200', function(done) {
            chai
                .request(app)
                .get('/')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    done()
              });
        });
    });
    
    describe("Profile page resonds with status 200", function() {
        it('returns status 200', function(done) {
            chai
                .request(app)
                .get('/profile')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    done()
              });
        });
    });

    describe("Education page resonds with status 200", function() {
        it('returns status 200', function(done) {
            chai
                .request(app)
                .get('/education')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    done()
              });
        });
    });

    describe("Work page resonds with status 200", function() {
        it('returns status 200', function(done) {
            chai
                .request(app)
                .get('/work')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    done()
              });
        });
    });
});
