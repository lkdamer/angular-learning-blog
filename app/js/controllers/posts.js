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
    $scope.deletePost = function(id) {
      apiService.delete("posts/" + id);
      //still working on making freshly deleted posts disappear without refresh
      for (i = 0; i < $scope.posts.length; i++){
        if ($scope.posts[i].id === id) {
          console.log($scope.posts);
          $scope.posts.splice(i, 1);
          console.log("after:");
          console.log($scope.posts);
        };
      };
    };

}]);

postsControllerModule.controller('newPostController',
  ['$scope', '$http', 'apiService', function($scope, $http, apiService){
    $scope.aName = "new controller, yay!";

    var uncheckBoxes = function(){
      var boxes = document.getElementsByClassName("checkbox");
      for (i = 0; i < boxes.length; i++) {
        boxes[i].checked = false
      };
    };

    $scope.submitNewPost = function() {
      $scope.newPost.date = new Date()
      $scope.posts.push($scope.newPost);
      apiService.postPost("posts", $scope.newPost);
      console.log($scope.newPost)
      uncheckBoxes()
      $scope.newPost = {title: '', content: '', tag_ids: [], date: null};
    };

    $scope.newPost = {tag_ids: [], date: new Date()};

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
  ['$scope', '$http', '$stateParams', 'apiService', function($scope, $http, $stateParams, apiService) {
    $scope.id = $stateParams.id;
    $scope.post = apiService.get("posts/" + $scope.id)
      .success(function(data, status, header, config){
        $scope.post = data
      });

}]);
