module.exports = {
    PORT: process.env.PORT || 1234,
    MODE: process.argv[2] === "record" ? "record" : "replay"
};
