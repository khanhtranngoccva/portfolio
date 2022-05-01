[![Build Status](https://api.travis-ci.org/MrPeak/html2svg.svg?branch=master)](https://travis-ci.org/travis-ci/travis-web)

## html2svg convertor

A converter which could convert HTML document to SVG image.

Even if a JS-Rendered HTML!

## Installation

Available on NPM as fetch.

```bash

$ npm install html2svg

```

## Usage

#### Implement Promise (es6)
```javascript

const html2svg = require('html2svg');
const input = 'file:///root/path/file.ext'; // Or: http://google.com
const output = '/root/path/file.ext';
const needJSRender = true;

html2svg({input, output, needJSRender}).then(res => {
    console.log(res);
}).catch(err => {
    console.error(err);
});

```

#### Work with async-await (es7)

```javascript
const html2svg = require('html2svg');
const input = 'file:///root/path/file.ext'; // Or: http://google.com
const output = '/root/path/file.ext';

(async function() {

  try {
    let res = await html2svg({input, output});

    console.log(res);
  } catch(err) {
    console.error(err)
  }

}());
```
## Config

| Param | Description | required | default | tip |
|---|---|---|---|---|
| input  |  Input path. | true  | null  | File URIs or HTTP URIs |
| output  | Ouput path with file name. | true |  null  | - |
| needJSRender | Tell it whether process JS Rendering or not. | false |  null  | - |


## Support

Please [open an issue](https://github.com/MrPeak/html2svg/issues/new) for support.
