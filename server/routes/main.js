var path = require("path");

var picture = require("../resources/picture");

module.exports = function(app) {
    app.route("/resources/picture")
        .post(picture.insert)
        .get(picture.queryAll);

    app.route("/resources/picture/:_id")
        .get(picture.findOne)
        .put(picture.update)
        .delete(picture.remove);

    // HTML5MODE
    app.all("/*", function(req, res) {
        res.sendFile(path.resolve("public/index.html"));
    });
};