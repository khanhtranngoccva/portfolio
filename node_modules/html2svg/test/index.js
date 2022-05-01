const path = require('path');
const fs = require('co-fs');
const mocha = require('mocha');
const coMocha = require('co-mocha');
const should = require('chai').should();
const html2svg = require('../index');

coMocha(mocha);

describe('Test base features.', function() {
    this.timeout(20000);

    const input = path.join(__dirname, './documents/button.html');
    const output = path.join(__dirname, './svgs/button.svg');

    it('Should generate a svg file in "output" path.', function* () {

        const convertResult = yield html2svg({input, output});
        const stats = yield fs.stat(output);

        stats.isFile().should.equal(true);
    });

    it('Should generate a svg file which contains standard xml code.', function* () {
        const xmlRegex = /<!DOCTYPE svg PUBLIC/ig;

        const convertResult = yield html2svg({input, output});
        const xmlCode = yield fs.readFile(output);

        xmlRegex.test(xmlCode).should.equal(true);

    });
});
