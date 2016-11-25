'Use Strict';
angular.module('starter').controller('creerPageProCtrl', function ($scope, $rootScope, $state, $localStorage, $location, $http, $ionicPopup, $firebaseAuth, $firebaseObject, $log, Auth, FURL, Utils, $ionicModal, Conversation, $ionicHistory) {
    $scope.pagepro = {};
    $scope.goBack = function () {
        $ionicHistory.goBack();
    };

    $scope.creerPagePro = function () {
        $rootScope.aPagePro = true;
        var obj = {nom:$scope.pagepro.nom};
        $rootScope.pagePro = obj;
        console.log($rootScope.pagePro);
        $state.go("pagepro");
    };
});