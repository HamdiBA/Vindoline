angular.module('starter')
.controller('AppCtrl', function ($scope,$rootScope, $ionicModal, $timeout, $location, $firebaseObject, Auth, FURL, Utils, $ionicHistory) {
  var ref = firebase.database().ref();
<<<<<<< HEAD
    $rootScope.user = { firstname: "Elisa", lastname: "Laurent", nomComplet:"Elisa Laurent", imageProfil:"img/bonhomme.jpg" };

=======
    $rootScope.user = { firstname: "Elisa", lastname: "Laurent", nomComplet:"Elisa Laurent", imageProfil:"../img/bonhomme.jpg", aPagePro:false };
    $rootScope.pagePro = {};
>>>>>>> 1ab6f70bc31f875e8e4fea07e2e5532c663fdc59
  $scope.logOut = function () {
      Auth.logout();
      $location.path("/login");
  };

  $scope.myGoBack = function () {
    $ionicHistory.goBack();
  };

  $ionicModal.fromTemplateUrl('templates/addPost/new_post.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalPost = modal;
  });
  $scope.openPost = function() {
    $scope.modalPost.show();
  };
  $scope.closePost = function() {
    $scope.modalPost.hide();
  };

  $scope.refresh = function() {
    // Stop the ion-refresher from spinning
    $scope.$broadcast('scroll.refreshComplete');
  };

})
;
