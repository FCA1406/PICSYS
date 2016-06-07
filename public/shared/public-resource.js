angular.module("PublicResource", ["ngResource"])
    .factory("pictureService", function($resource) {
        return $resource("/resources/picture/:_id", null, {
                insert : {
                    method : "POST",
                    transformResponse: function(data){
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

         service.maintain = function(picture) {
             return $q(function(resolve, reject) {
                 $rootScope.$broadcast("pictureSubmitted");

                 if (picture._id) {
                     pictureService.update({_id: picture._id}, picture, function() {
                         resolve({picture : picture,
                                  message : "Picture " + picture.name + " Updated!"});
                     }, function(erro) {
                         reject({message : erro});
                     });
                 } else {
                     pictureService.insert(picture, function(data) {
                         resolve({picture : data,
                                  message : "Picture " + picture.name + " Added!"});
                     }, function(erro) {
                         reject({message : erro});
                     });
                 }
             });
         };

         return service;
    });