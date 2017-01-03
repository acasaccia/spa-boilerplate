var express = require("express");
var morgan = require("morgan");

var server = express();
const PORT = process.env.PORT || 8080;

server.use(morgan("combined"));
if (process.env.NODE_ENV === "production") {
    server.use(function(req, res, next) {
        if(req.header("x-forwarded-proto") !== "https") {
            return res.status(403).send("SSL required");
        }
        next();
    });
}
server.use("/", express.static(__dirname + "/build"));
server.listen(PORT);
