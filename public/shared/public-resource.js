angular.module("PublicResource", ["ngResource","ngFileUpload"])
    .factory("pictureService", function($resource) {
        return $resource("/resources/picture/:_id", null, {
                insert : {
                    method : "POST",
                    transformResponse: function(data) {
                        var picture = {};

                        picture = JSON.parse(data);

                        return picture;
                    }
                },
                update : {
                    method : "PUT"
                }
        });
    })
    .factory("maintainPicture", function($q, pictureService, $rootScope) {
        var service = {};

        service.save = function(archive, picture) {
            return $q(function(resolve, reject) {
                $rootScope.$broadcast("pictureSubmitted");

                if (picture._id) {
                    pictureService.update({_id: picture._id}, picture, function() {
                        resolve({picture : picture,
                                 method : "UPDATE",
                                 message : "Picture " + picture.file + " Was Updated!"});
                    }, function(erro) {
                        reject({message : erro});
                    });
                } else {
                    pictureService.insert(picture, function(data) {
                        resolve({picture : data,
                                 method : "INSERT",
                                 message : "Picture " + picture.file + " Was Added!"});
                    }, function(erro) {
                        reject({message : erro});
                    });
                }
            });
        };

        return service;
    })
    .factory("archiveUpload", function($q, Upload) {
        var service = {};

        service.save = function(archive, picture) {
            return $q(function(resolve, reject) {
                if (archive.upload) {
                    Upload.rename(archive.upload, picture._id + "." + archive.upload.name.split(".").pop());

                    Upload.upload({
                        url : "/resources/upload",
                        data : {file : archive.upload}
                    }).success(function () {
                        resolve({message : archive.upload.name + " Was Uploaded!"});
                    }).error(function(erro) {
                        reject({message : erro});;
                    });
                }
            });
        };

        return service;
    });