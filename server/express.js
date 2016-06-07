var express = require("express");

var bodyParser = require("body-parser");

module.exports = function() {
    var app = express();

    app.use(express.static("./public"));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use(function(req, res, next) {
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        next();
    });

    return app;
};