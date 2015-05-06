'use strict';

/**
 * @ngdoc function
 * @name devNewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devNewsApp
 */
angular.module('devNews')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
