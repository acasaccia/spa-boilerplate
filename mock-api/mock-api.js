var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var cors = require("./middleware/cors");
var cfg = require("./config");
var app = express();

app.use(cors);
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

if (cfg.MODE === "record") {
    const record = require("./middleware/record");
    app.all("*", record);
} else {
    const replay = require("./middleware/replay");
    app.all("*", replay);
}

app.listen(cfg.PORT, function () {
    console.log("Mockserver listening on port " + cfg.PORT + " in " + String(cfg.MODE).toUpperCase() + " mode");
});