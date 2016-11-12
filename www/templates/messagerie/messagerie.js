'Use Strict';
angular.module('starter').controller('messagerieController', function ($scope, $state, $localStorage, $location, $http, $ionicPopup, $firebaseAuth, $firebaseObject, $log, Auth, FURL, Utils, $ionicModal, Conversation) {
    $scope.modal = {};
    $scope.message = {};
    $ionicModal.fromTemplateUrl('templates/messagerie/newConversation.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.newConversation = function () {
        $scope.modal.show();
    };
   
   
    $scope.modal.hide = function () {
        $scope.modal.hide();
    };
    $scope.nouveauMessage = function (message) {
        console.log(message);
       // var ref = firebase.database().ref();
       // var obj = $firebaseObject(ref);
       // console.log(obj);
        $scope.modal.hide();
       // Conversation.creerConversation(Auth.user,message.texte,message.user);
    };
});