"use strict";

const url = require('url');
const path = require('path');
const exec = require('child-process-promise').exec;


module.exports = function(input, output) {

    const urlObj = url.parse(input);

    if (!urlObj.protocol) {
        input = 'file://' + input;
    }

    // cd ../bin
    process.chdir(path.join(__dirname, '../bin'));

    // To convert
    return exec('java -jar webvector-3.4.jar ' + input + ' ' + output + ' svg');
};