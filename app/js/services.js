var servicesModule = angular.module('servicesModule', []);

servicesModule.factory('apiService', ['$http', function($http){
  var url = "https://my-blahg-api.herokuapp.com/";

  return {
    get: function(page) {
      return $http.get(url + page)
    },
    postPost: function(page, newPost) {
      return $http.post(url + page,
        {
          post: {title: newPost.title,
                content: newPost.content,
                tag_ids: newPost.tag_ids
                }
        });
      }

  }
}]);
