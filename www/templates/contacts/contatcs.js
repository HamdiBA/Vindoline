'Use Strict';
angular.module('starter').controller('contactController', function ($scope,$rootScope, $state, $localStorage, $location, $http, $ionicPopup, $firebaseAuth, $firebaseObject, $log, Auth, FURL, Utils, $ionicModal, Conversation,$ionicHistory) {
  $scope.modal = {};
  $scope.voirConv = {};
  $scope.message = {};
  $scope.conversation = {};
  $scope.input = {};

  $ionicModal.fromTemplateUrl('templates/modal/connections.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.openConnections = function () {
    $scope.modal.show();
  };
  $scope.closeConnections = function() {
    $scope.modal.hide();
  };


  $scope.openProfilFriend = function () {;
    $state.go('profileNotFriend')
  };



  $ionicModal.fromTemplateUrl('templates/modal/new_connection.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modalConn = modal;
  });
  $scope.openAdd = function () {
    $scope.modalConn.show();
  };
  $scope.closeAdd = function() {
    $scope.modalConn.hide();
  };

});
