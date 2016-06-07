angular.module("picsys")
    .controller("PictureController", function($scope, pictureService, maintainPicture, archiveUpload, $routeParams) {
        $scope.message = "";

        $scope.archive = {};
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
                maintainPicture.save($scope.archive, $scope.picture).then(function(data) {
                    $scope.message = data.message;

                    if (data.method == "INSERT") {
                        $scope.picture = data.picture;

                        archiveUpload.save($scope.archive, $scope.picture).then(function(data) {
                            $scope.message = $scope.message || data.message;
                        }).catch(function(erro) {
                            $scope.message = erro;
                        });

                        $scope.archive = {};
                        $scope.picture = {};
                    }
                }).catch(function(erro) {
                    $scope.message = erro;
                });
            }
        };
    });