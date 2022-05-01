"use strict";

const path = require('path');
const html2svg = require('../index');

const inputLocal = path.join(__dirname, './documents/button.html');
const inputRemote = 'http://localhost/alpha-tag/examples/tag.md';

const output = path.join(__dirname, './svgs/button.svg');


html2svg({input: inputLocal, output, needJSRender: false})
    .then(path => {
        console.log(path);
    })
    .catch(err => {
        console.error(err);
    });
