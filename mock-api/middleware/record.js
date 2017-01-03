const request = require("request");
const fs = require("fs");
const cfg = require("../config");
const utils = require("../utils");

module.exports = function record(req, res, next) {
    var url = cfg.REAL_SERVER_URL + req.url;
    var r = request(url);
    const stream = fs.createWriteStream(utils.getFilenameFromUri(req.url));
    req.pipe(r).pipe(res);
    req.pipe(r).pipe(stream);
};