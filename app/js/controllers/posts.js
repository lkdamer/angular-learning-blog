var postsControllerModule = angular.module('postsControllerModule', []);

postsControllerModule.controller('postsController',
  ['$scope', '$http', 'apiService', function($scope, $http, apiService){
    $scope.aName = "posts controller yay!";

    $scope.posts = [];
    $scope.tags = [];

    $scope.getTagName = function(id) {
      var ret = "";
      for (i = 0; i < $scope.tags.length; i++) {
        if (id == $scope.tags[i].id) {
          ret = $scope.tags[i].name + " ";
        }
      }
      return ret;
    };

    apiService.get('posts')
        .success(function(data, status, header, config) {
          $scope.posts = data;
        });
    apiService.get('tags')
        .success(function(data, status, header, config) {
          $scope.tags = data
        });

}]);

postsControllerModule.controller('newPostController',
  ['$scope', '$http', 'apiService', function($scope, $http, apiService){
    $scope.aName = "new controller, yay!";

    $scope.submitNewPost = function() {
      var postToPush = {};
      postToPush.title = $scope.newPost.title;
      postToPush.content = $scope.newPost.content;
      postToPush.tag_ids = $scope.newPost.tag_ids;
      $scope.posts.push(postToPush);
      EXPERIMENT
      apiService.postPost("posts", $scope.newPost);
      $scope.newPost = {title: '', content: '', tag_ids: []};
    };

    $scope.newPost = {tag_ids: []};

    $scope.toggleId = function(id) {
      var i = $scope.newPost.tag_ids.indexOf(id);
      // i will equal the index of the item if it's in the array, or -1 if not
      if (i == -1) {
        $scope.newPost.tag_ids.push(id);
      } else {
        $scope.newPost.tag_ids.splice(i, 1);
      };
    };

}]);

postsControllerModule.controller('postController',
  ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    $scope.postName = "This is the post view";
    $scope.id = $stateParams.id;
}]);
