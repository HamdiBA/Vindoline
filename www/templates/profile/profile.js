'Use Strict';
angular.module('starter').controller('profilController', function ($scope,$rootScope, $state, $localStorage, $location, $http, $ionicPopup, $firebaseAuth, $firebaseObject, $log, Auth, FURL, Utils, $ionicModal, Conversation,$ionicHistory) {
  $scope.modal = {};
  $scope.voirConv = {};
  $scope.message = {};
  $scope.conversation = {};
  $scope.input = {};

  $ionicModal.fromTemplateUrl('templates/profile/editProfil.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.editProfil = function () {
    $scope.modal.show();
  };
  $scope.modal.hide = function () {
    $scope.modal.hide();
  };
  $scope.closeEdit = function() {
    $scope.modal.hide();
  };

  $scope.goBack2 = function () {
    $state.go("contacts");
  };

});
