const http = require("http");
const service = require("./service.js");

module.exports = http.createServer((req, res) => {
    service.mainRequest(req, res);
});
