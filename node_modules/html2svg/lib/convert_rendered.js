"use strict";

const fs = require('fs');
const url = require('url');
const path = require('path');
const cfs = require('co-fs');
const phantom = require('phantom');
const cheerio = require('cheerio');

const toSvg = require('./svg');
const uid = require('./uid');

/**
 * Convert method with cli rendering
 *
 */
module.exports = function * (input, output) {

    // Began to create phantomJS instance
    const instance = yield phantom.create();
    const pageHost = url.parse(input).host;
    const pageProt = url.parse(input).protocol;

    let page = yield instance.createPage();

    //page.setting('localToRemoteUrlAccessEnabled', false);
    page.setting('resourceTimeout', 6000);
    page.setting('loadImages', false);

    console.time('open page');
    let status = yield page.open(input);
    console.timeEnd('open page');

    if (status != 'success') {
        instance.exit();
        console.log('Open page failed');
        return false;
    }

    console.time('valuate page');
    let documentStr = yield page.evaluate(function() {
        return document.all[0].outerHTML;
    });
    console.timeEnd('valuate page');

    const $ = cheerio.load(documentStr);

    $('link[href*=".css"]').each(function() {
        let $this = $(this);
        let href = this.attribs.href;

        if (!href) {
            return true;
        }

        let urlObj = url.parse(href);

        if (urlObj.host) {
            return true;
        }

        $this.attr('href', pageProt + '//' + path.join(pageHost, urlObj.path));
    });

    let docStr = '<!DOCTYPE html>' + $.html();

    //写文件
    let docName = uid() + '.html';
    let tmpPath = path.join(__dirname, '../', '.tmp');

    fs.mkdirSync(tmpPath);

    let docPath = path.join(tmpPath, docName);

    yield cfs.writeFile(docPath, docStr);

    return toSvg(docPath, output);
};
