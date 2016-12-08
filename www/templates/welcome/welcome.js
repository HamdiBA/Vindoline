/**
 * Created by hamdi on 08/12/16.
 */
'Use Strict';
angular.module('starter').controller('welcomeController', function ($scope,$rootScope, $state, $localStorage, $location, $http, $ionicPopup, $firebaseAuth, $firebaseObject, $log, Auth, FURL, Utils, $ionicModal, Conversation,$ionicHistory) {
  $scope.modal = {};
  $scope.voirConv = {};
  $scope.message = {};
  $scope.conversation = {};
  $scope.input = {};

  $ionicModal.fromTemplateUrl('templates/login/login.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalLogin = modal;
  });
  $scope.openLogin = function() {
    $scope.modalLogin.show();
  };
  $scope.closeLogin = function() {
    $scope.modalLogin.hide();
  };

  // Sign up modal
  $ionicModal.fromTemplateUrl('templates/register/register.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalRegister = modal;
  });
  $scope.openRegister = function() {
    $scope.modalRegister.show();
  };
  $scope.closeRegister = function() {
    $scope.modalRegister.hide();
  };

});
