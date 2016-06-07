var http = require("http");
var express = require("./server/express");

http.createServer(express).listen(process.env.PORT || 9090, function() {
    console.log("Server Listening On Port %s", this.address().port);
});