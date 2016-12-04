angular.module('starter')
.controller('AppCtrl', function ($scope,$rootScope, $ionicModal, $timeout, $location, $firebaseObject, Auth, FURL, Utils, $ionicHistory) {
  var ref = firebase.database().ref();

    $rootScope.user = { firstname: "Hamdi", lastname: "Benaoun", nomComplet:"Hamdi Benaoun", imageProfil:"img/me.jpg" };


    $rootScope.user = { firstname: "Hamdi", lastname: "Benaoun", nomComplet:"Hamdi Benaoun", imageProfil:"../img/me.jpg", aPagePro:false };
    $rootScope.pagePro = {};
  $scope.logOut = function () {
      Auth.logout();
      $location.path("/login");
  };

  $scope.myGoBack = function () {
    $ionicHistory.goBack();
  };

  // add new post

  $ionicModal.fromTemplateUrl('templates/addPost/new_post.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalPost = modal;
  });
  $scope.newPost = function() {
    $scope.modalPost.show();
  };

  // calendar



  // refresh page

  $scope.refresh = function() {
    // Stop the ion-refresher from spinning
    $scope.$broadcast('scroll.refreshComplete');
  };

})
;
