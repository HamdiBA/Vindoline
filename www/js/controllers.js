angular.module('starter')
.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $location, $firebaseObject, Auth, FURL, Utils, $ionicHistory) {
  var ref = firebase.database().ref();
  $scope.logOut = function () {
      Auth.logout();
      $location.path("/login");
  }

  $scope.myGoBack = function () {
      $ionicHistory.goBack();
  };
  
})
;
