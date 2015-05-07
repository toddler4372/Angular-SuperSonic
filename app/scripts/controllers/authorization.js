'use strict';

app.controller('AuthCtrl', function ($scope, $location, Auth, user) {
	// Redirect to homepage if already logged in
	if (Auth.signedIn()) {
		$location.path('/');
	}

	$scope.login = function () {
			Auth.login($scope.user).then(function () {
				$location.path('/');
			}, function (error) {
				$scope.error = error.toString();
		});
	};
	// Take user object and send to Auth.register
	$scope.register = function () {
		Auth.register($scope.user).then(function() {
			// Call Auth.login on our user object after registration is successful to log in user
			return Auth.login($scope.user).then(function() {
				// If login succeeds, redirect to homepage
				$location.path('/');
			});
		}, function (error) {
			$scope.error = error.toString();
		});
	};
});