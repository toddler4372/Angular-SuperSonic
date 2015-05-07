'use strict';

// inject Post service and $scope object into controller
app.controller('PostsCtrl', function ($scope, $location, Post, Auth) {
  $scope.posts = Post.all;
  $scope.user = Auth.user;

  $scope.post = {url: 'http://', title: ''};

  $scope.deletePost = function (post) {
  	Post.delete(post);
  };

});

