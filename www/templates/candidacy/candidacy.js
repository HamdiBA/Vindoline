'Use Strict';
angular.module('starter').controller('candidacyCtrl', function ($scope, $state, $localStorage, $location,$http,$ionicPopup,$firebaseAuth , $firebaseObject,$log, Auth, FURL, Utils) {


  $scope.goBack = function () {
    console.log('bah');
    $state.go("/candidacy");
  }


} );
