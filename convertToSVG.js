const html2svg = require("html2svg");

const input = "index.html";
const output = "output.svg";

(async function() {
    try {
        let result = await html2svg({input, output});
        console.log(result);
    } catch(e) {
        console.error(e);
    }
})();