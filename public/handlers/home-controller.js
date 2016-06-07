angular.module("picsys")
    .controller("HomeController", function($scope, pictureService/*, $window*/) {
        $scope.message = "";
 
        $scope.pictures = [];
        $scope.filter = "";

        pictureService.query(function(pictures) {
            $scope.pictures = pictures;
        }, function(erro) {
            $scope.message = erro;
        });

        $scope.remove = function(picture) {
            //if ($window.confirm("Are you sure about this?")) {
                pictureService.delete({_id : picture._id}, function() {
                    var pictureIndex = $scope.pictures.indexOf(picture);
                    $scope.pictures.splice(pictureIndex, 1);

                    $scope.message = picture.file + " Was Deleted!";
                }, function(erro) {
                    $scope.message = erro;
                });
            //}
        };
    });