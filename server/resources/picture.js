var pictures = require("../nedb")("pictures");

module.exports = function(app) {
    var service = {}

    service.queryAll = function(req, res) {
        pictures.find({}).sort({name : 1}).exec(function(erro, data) {
            if (erro) {
                res.status(500).json(erro);
            }

            if (data) {
                res.json(data);
            }
        });
    };

    service.findOne = function(req, res) {
        pictures.findOne({_id: req.params._id}, function(erro, data) {
            if (erro) {
                res.status(404).json(erro);
            }

            if (data) {
                res.json(data);
            }
        });
    };

    service.insert = function(req, res) {
        pictures.insert(req.body, function(erro, data) {
            if (erro) {
                res.status(500).json(erro);
            }

            if (data) {
                res.json(data);

                app.get("io").emit("pictureSocket", "One Picture Was Added!");
            }
        });
    };

    service.update = function(req, res) {
        pictures.update({_id : req.params._id}, req.body, function(erro, data) {
            if (erro) {
                res.status(500).json(erro);
            }

            if (data) {
                res.json(data);

                app.get("io").emit("pictureSocket", "One Picture Was Updated!");
            }
        });
    };

    service.remove = function(req, res) {
        pictures.remove({_id: req.params._id}, {}, function (erro, data) {
            if (erro) {
                res.status(500).json(erro);
            }

            if (data) {
                res.status(204).end();

                app.get("io").emit("pictureSocket", "One Picture Was Deleted!");
            };
        });
    };

    return service;
};