angular.module("picsys")
    .controller("PictureController", function($scope, pictureService, maintainPicture, $routeParams) {
        $scope.message = "";

        $scope.picture = {};

        if ($routeParams._id) {
            pictureService.get({_id : $routeParams._id}, function(picture) {
                $scope.picture = picture;
            }, function(erro) {
                $scope.message = erro;
            });
        }

        $scope.save = function() {
            if ($scope.pictureForm.$valid) {
                maintainPicture.maintain($scope.picture).then(function(data) {
                    $scope.picture = data.picture;

                    $scope.message = data.message;
                }).catch(function(erro) {
                    $scope.message = erro;
                });
            }
        };
    });