angular.module("picsys", ["ngRoute","ngAnimate","PublicComponent","PublicResource"])
	.config(function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$routeProvider.when("/", {
			templateUrl : "partials/home-view.html",
			controller : "HomeController"
		});

		$routeProvider.when("/new/picture", {
			templateUrl : "partials/picture-view.html",
			controller : "PictureController"
		});

		$routeProvider.when("/edit/picture/:_id", {
			templateUrl : "partials/picture-view.html",
			controller : "PictureController"
		});

		$routeProvider.otherwise({redirectTo : "/"});

        var webSocket = io();

        webSocket.on("pictureSocket", function(data) {
			angular.element(document.querySelector("#socketMessage")).text(data);
        });
	});