const fs = require("fs");
const utils = require("../utils");

module.exports = function replay(req, res, next) {
    const filename = utils.getFilenameFromUri(req.url);
    if (fs.existsSync(filename)) {
        const content = require(filename);
        res.send(content);
    } else {
        next();
    }
};