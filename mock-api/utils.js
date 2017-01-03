const cfg = require("./config");
const sanitize = require("sanitize-filename");

module.exports = {
    getFilenameFromUri: function(uri) {
        return cfg.FIXTURES_FOLDER + "/" + sanitize(uri) + ".json";
    }
};
