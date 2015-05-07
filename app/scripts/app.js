/* global app:true */
/* exported app */
/* 'Firebase': false */

'use strict';

/**
 * @ngdoc overview
 * @name devNewsApp
 * @description
 * # devNewsApp
 *
 * Main module of the application.
 */
var app = angular
  .module('devNews', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])

  .constant('FIREBASE_URL', 'https://sweltering-heat-8723.firebaseio.com/')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        // Resolve authentication of user before redirecting
        resolve: {
          // Define user property to inject into controller
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl', 
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
