var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('./middleware/cors');
var cfg = require('./config');
var app = express();

app.use(cors);
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(cfg.PORT, function () {
    console.log('App listening on port ' + cfg.PORT);
});
