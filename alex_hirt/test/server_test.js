const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const expect = chai.expect;
const server = require(__dirname + '/../server');

chai.use(chaiHttp);

describe('server shoudld start', () => {
  var currentFiles;

  before(() => {
    currentFiles = fs.readdirSync(__dirname + '/../writeout-texts');
    currentFiles = currentFiles.length;
  });

  it('should create a new file', (done) => {
    chai.request('http://localhost:5000')
      .get('/')
      .end(() => {
        var newFiles = fs.readdirSync(__dirname + '/../writeout-texts');
        newFiles = newFiles.length;
        expect(newFiles).to.eql(currentFiles + 1);
        done();
      });
  });
});
