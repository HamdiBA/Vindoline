'Use Strict';
angular.module('starter').controller('forgotController', function ($scope, $state, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {

  $scope.resetpassword = function(user) {
      if(angular.isDefined(user)){
      Auth.resetpassword(user.email)
        .then(function() {
          //console.log("Password reset email sent successfully!");
          $location.path('/login');
        }, function(err) {
           //console.error("Error: ", err);
        });
      }
    };
}
);
