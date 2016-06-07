var multer = require("../multer");

module.exports = function(app) {
    var service = {}

    service.upload = function(req, res) {
        multer(req, res, function(erro) {
            if (erro) {
                res.status(500).json(erro);
            }

            res.status(204).end();

            app.get("io").emit("uploadSocket", "One File Was Uploaded!");
        });
    };

    return service;
};