const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

    // Viewing one stock: GET request to /api/stock-prices/
    it('should return one stock price', function (done) {
        chai
          .request(server)
          .get('/api/stock-prices')
          .query({ stock: 'AAPL' }) // Replace with the desired stock symbol
          .end(function (err, res) {
            // Add assertions here to check the response
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            // Add more assertions as needed
            done();
          });
      });

      // Viewing one stock and liking it: GET request to /api/stock-prices/
      it('should return one stock price and increment likes', function (done) {
        chai
          .request(server)
          .get('/api/stock-prices')
          .query({ stock: 'AAPL', like: true }) // Replace with the desired stock symbol
          .end(function (err, res) {
            // Add assertions here to check the response
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            // Add more assertions as needed
            done();
          });
      });
      
      // Viewing the same stock and liking it again: GET request to /api/stock-prices/
      it('should return one stock price and maintain the same number of likes', function (done) {
        chai
          .request(server)
          .get('/api/stock-prices')
          .query({ stock: 'AAPL', like: true }) // Replace with the desired stock symbol
          .end(function (err, res) {
            // Add assertions here to check the response
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            // Add more assertions as needed to ensure likes remain the same
            done();
          });
      });
      
      //Viewing two stocks: GET request to /api/stock-prices/
      it('should return two stock prices', function (done) {
        chai
          .request(server)
          .get('/api/stock-prices')
          .query({ stock: ['AAPL', 'GOOGL'] }) // Replace with the desired stock symbols
          .end(function (err, res) {
            // Add assertions here to check the response
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            // Add more assertions as needed
            done();
          });
      });

      //Viewing two stocks and liking them: GET request to /api/stock-prices/
      it('should return two stock prices and increment likes', function (done) {
        chai
          .request(server)
          .get('/api/stock-prices')
          .query({ stock: ['AAPL', 'GOOGL'], like: true }) // Replace with the desired stock symbols
          .end(function (err, res) {
            // Add assertions here to check the response
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            // Add more assertions as needed
            done();
          });
      });
      

});
