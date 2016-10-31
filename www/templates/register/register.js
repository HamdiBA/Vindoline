'Use Strict';
angular.module('starter').controller('registerController', function ($scope, $state, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {

  $scope.register = function(user) {
    if(angular.isDefined(user)){
    Utils.show();
    Auth.register(user)
      .then(function() {
         Utils.hide();
         console.log("Avant de vous connecter à:" + JSON.stringify(user));
         $location.path('/');
      }).catch(function(error) {
          $log.log("Error: " + error);
        });
    }
  };

}
);
