var express = require("express");
var app = express();

var bodyParser = require("body-parser");

var routes = require("./routes/main");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

module.exports = app;