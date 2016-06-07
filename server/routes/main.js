var path = require("path");

var archive = require("../resources/upload");
var picture = require("../resources/picture");

module.exports = function(app) {
    app.route("/resources/upload")
        .post(archive.upload)
        .put(archive.upload);

    app.route("/resources/upload/:_id")
        .get(function(req, res) {
            res.sendFile(path.resolve("public/uploads/" + req.params._id));
        });

    app.route("/resources/picture")
        .post(picture.insert)
        .get(picture.queryAll);

    app.route("/resources/picture/:_id")
        .get(picture.findOne)
        .put(picture.update)
        .delete(picture.remove);

	app.use(function(erro, req, res, next) {
        if (erro) {
		    res.end("<html><head><title>PICSYS</title></head><body>ERROR: On Request For Response<hr></body></html>");

		    //next();
        }
	});

    // HTML5MODE
    app.all("/*", function(req, res) {
        res.sendFile(path.resolve("public/index.html"));
    });
};