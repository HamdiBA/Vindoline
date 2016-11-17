/**
 * Created by hamdi on 13/11/16.
 */

'Use Strict';
angular.module('starter').controller('settingsCtrl', function ($scope, $state, $localStorage, $location, $http, $ionicPopup, $firebaseAuth, $firebaseObject, $log, Auth, FURL, Utils, $ionicNavBarDelegate, $ionicHistory) {
    console.log("FUCK " + $ionicHistory.backTitle());
    $ionicNavBarDelegate.showBackButton(true);
    } );
