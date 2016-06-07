angular.module("PublicComponent", [])
	.directive("systemHead", function() {
		var ddo = {};

		ddo.restrict = "E";
		ddo.scope = {
			title : "@"
		};
		//ddo.transclude = true;
		ddo.templateUrl = "../shared/components/system-head.html";

		return ddo;
	})
	.directive("buttonRemove", function() {
		var ddo = {};

		ddo.restrict = "E";
		ddo.scope = {
			disabled : "@",
			action : "&"
		};
		ddo.transclude = true;
		ddo.templateUrl = "../shared/components/button-remove.html";

		return ddo;
	})
	.directive("buttonEdit", function() {
		var ddo = {};

		ddo.restrict = "E";
		ddo.scope = {
			disabled : "@",
			link : "@"
		};
		ddo.transclude = true;
		ddo.templateUrl = "../shared/components/button-edit.html";

		return ddo;
	})
	.directive("pictureSubmitted", function() {
		var ddo = {};

		ddo.restrict = "A";
		ddo.scope = {
			pictureSubmitted : "="
		};
		ddo.link = function(scope, element) {
			scope.$on("pictureSubmitted", function() {
				element[0].focus();
			});
		};

		return ddo;
	})
	.directive("picturePanel", function() {
		var ddo = {};

		ddo.restrict = "E";
		ddo.scope = {
			picture : "=",
			editable : "&?",
			removable : "&?"
		};
		ddo.transclude = true;
		ddo.templateUrl = "../shared/components/picture-panel.html";

		return ddo;
	})
	.directive("systemFooter", function() {
		var ddo = {};

		ddo.restrict = "E";
		ddo.scope = {
			title : "@"
		};
		//ddo.transclude = true;
		ddo.templateUrl = "../shared/components/system-footer.html";

		return ddo;
	});