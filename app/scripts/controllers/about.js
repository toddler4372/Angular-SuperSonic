'use strict';

/**
 * @ngdoc function
 * @name devNewsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the devNewsApp
 */
angular.module('devNews')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
