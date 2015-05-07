'use strict';

// inject Post service and $scope object into controller
app.controller('PostsCtrl', function ($scope, $location, Post) {
  $scope.posts = Post.all;

  $scope.post = {url: 'http://', title: ''};

  $scope.deletePost = function (post) {
  	Post.delete(post);
  };

});

