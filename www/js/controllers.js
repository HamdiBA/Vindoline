angular.module('starter')
.controller('AppCtrl', function ($scope,$rootScope, $ionicModal, $timeout, $location, $firebaseObject, Auth, FURL, Utils, $ionicHistory) {
  var ref = firebase.database().ref();
    $rootScope.user = { firstname: "Elisa", lastname: "Laurent", nomComplet:"Elisa Laurent", imageProfil:"img/bonhomme.jpg" };
    
  $scope.logOut = function () {
      Auth.logout();
      $location.path("/login");
  }

  $scope.myGoBack = function () {
      $ionicHistory.goBack();
  };
  
})
;
