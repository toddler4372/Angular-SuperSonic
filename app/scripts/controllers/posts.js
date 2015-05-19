'use strict';

app.controller('PostsCtrl', ['$scope', 'Post', 'Auth', function ($scope, Post, Auth) {
    $scope.posts = Post.all;
    $scope.user = Auth.user;
    $scope.signedIn = Auth.signedIn;
    $scope.date = '20140313T00:00:00';

    $scope.deletePost = function (post) {
        Post.delete(post);
    };
}]);

