var multer = require("../multer");

var service = {}

service.upload = function(req, res) {
    multer(req, res, function(erro) {
        if (erro) {
            res.status(500).json(erro);
        }

        res.status(204).end();
    });
};

module.exports = service;