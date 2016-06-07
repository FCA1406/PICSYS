var express = require("./server/express")();

var http = require("http").Server(express);
var io = require("socket.io")(http);

var consign = require('consign');

express.set("io", io);

consign({cwd : "server"})
    .include("resources")
    .then("routes")
    .into(express);

http.listen(process.env.PORT || 9090, function() {
    console.log("Server Listening On Port %s", this.address().port);
});