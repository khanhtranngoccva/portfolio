"use strict";

const co = require('co');
const path = require('path');
const rmdir = require( 'rmdir');

const convert = require('./lib/convert');
const convertRendered = require('./lib/convert_rendered');
const tmpPath = path.join(__dirname, '.tmp');


const handleError = function(res) {
    if (+res.childProcess.exitCode !== 0 || res.stderr.indexOf('Done') === -1) {
        throw new Error(res.stderr || 'Error occurred!');
    }
};

module.exports = function(options) {
    let input = options.input;
    const output = options.output;
    const needJSRender = options.needJSRender || false;

    if (!input) {
        throw new Error('Please set the input filename');
    }

    if (!output) {
        throw new Error('Please set the output filename');
    }

    if (needJSRender) {
        let _convertRendered = co.wrap(convertRendered);

        return _convertRendered(input, output).then(res => {
            handleError(res);

            // Empty tmp folder
            rmdir(tmpPath);

            return output;
        });

    } else {

        return convert(input, output).then(res => {
            handleError(res);
            return output;
        });
    }


};