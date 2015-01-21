var homeControllerModule = angular.module('homeControllerModule', []);

homeControllerModule.controller('homeController', ['$scope', '$http', function($scope, $http) {
//   $scope.posts = [
//   {
//     "content": "Run biting sagittis elit cras nec vestibulum, tempus lick sleep on your keyboard stuck in a tree suscipit. Vestibulum judging you sleep in the sink eat the grass non non, zzz amet pellentesque tincidunt a. Iaculis purr rutrum claw faucibus sniff, nibh quis nunc feed me suspendisse vehicula toss the mousie. Sleep in the sink justo vestibulum ac hairball, tail flick jump eat faucibus enim ut purr iaculis. Zzz give me fish stuck in a tree jump on the table, in viverra rhoncus scratched sleep in the sink hiss stuck in a tree pharetra. Rutrum bat nam orci turpis sniff suspendisse, nibh rutrum nunc sagittis run orci turpis. Bat purr fluffy fur libero, attack lick adipiscing catnip sleep in the sink nunc.",
//     "date": "2015-01-07T00:00:00.000Z",
//     "id": "123abc",
//     "tag_ids": ["1a", "2b"],
//     "title": "My day"
//   },
//   {
//     "content": "Kitty ipsum dolor sit amet, climb the curtains run hairball judging you leap, biting sniff jump on the table fluffy fur biting. Lay down in your way run bat chase the red dot biting climb the curtains, bat chuf sleep on your face meow. I don't like that food tail flick biting leap puking, meow scratched stuck in a tree lick sleep in the sink climb the curtains. Puking jump on the table feed me rip the couch judging you, meow tail flick purr I don't like that food jump leap. Sniff bat bat feed me I don't like that food meow, toss the mousie toss the mousie toss the mousie feed me. Sleep on your keyboard bat purr hairball, sniff claw run jump on the table chuf eat. Chuf stuck in a tree biting chuf, eat the grass claw stretching sleep in the sink hairball stuck in a tree.",
//     "date": "2015-01-07T00:00:00.000Z",
//     "id": "woEvm3",
//     "tag_ids": [],
//     "title": "Turtles are weird"
//   },
//   {
//     "content": "In viverra faucibus justo bat, faucibus faucibus dolor sniff kittens non. Run judging you climb the curtains faucibus leap, vehicula sleep on your keyboard vehicula tortor faucibus stuck in a tree. Catnip eat the grass vehicula chase the red dot knock over the lamp, stuck in a tree rhoncus stuck in a tree neque quis nunc pellentesque. Vel sagittis feed me sagittis shed everywhere neque, cras nec suscipit chase the red dot sagittis. Attack your ankles elit claw sollicitudin purr scratched, puking suspendisse puking bibendum enim enim ut. Libero scratched orci turpis cras nec jump on the table nullam, catnip fluffy fur catnip nunc. Biting etiam feed me sollicitudin, litter box stuck in a tree climb the curtains bat chuf eat. Hairball dolor meow knock over the lamp hairball, libero quis enim feed me sunbathe nibh shed everywhere.",
//     "date": "2015-01-07T00:00:00.000Z",
//     "id": "bo2jwi",
//     "tag_ids": ["2b", "doop5"],
//     "title": "Teaching at Ada"
//   }
// ];
  // $scope.tags = [
  //   { "id": "1a", "name": "2cool4school" },
  //   { "id": "2b", "name": "kittycat" },
  //   { "id": "doop5", "name": "everything is awesome" }
  // ];

  // $http.get("https://my-blahg-api.herokuapp.com/posts")
  //     .success(function(data, status, header, config) {
  //       $scope.posts = data;
  //     });
  //
  // $http.get("https://my-blahg-api.herokuapp.com/tags")
  //     .success(function(data, status, header, config) {
  //       $scope.tags = data;
  //     });

  $scope.newPost = {"title": '', "content": '', "tag_ids": []};

  $scope.getTagName = function(id) {
    var ret = "";
    for (i = 0; i < $scope.tags.length; i++) {
      if (id == $scope.tags[i].id) {
        ret = $scope.tags[i].name + " ";
      }
    }
    return ret;
  };

  $scope.submitNewPost = function() {

    // var postToPush = {};
    // postToPush.title = $scope.newPost.title;
    // postToPush.content = $scope.newPost.content;
    // postToPush.tag_ids = $scope.newPost.tag_ids;
    // $scope.posts.push(postToPush);
    // EXPERIMENT
    $http.post("https://my-blahg-api.herokuapp.com/posts",
        { post: { title: $scope.newPost.title,
                  content: $scope.newPost.content
                }
        });
    // EXPERIMENT OVER
  };


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
