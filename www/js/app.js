

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngStorage', 'ngCordova','firebase','ngMessages'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
// Changue this for your Firebase App URL.
.constant('FURL', {
    apiKey: "AIzaSyAR3kCtS6N5O2wvg1XpOYuuRDVxFgk3VoE",
    authDomain: "ionic-7eb18.firebaseapp.com",
    databaseURL: "https://ionic-7eb18.firebaseio.com",
    storageBucket: "ionic-7eb18.appspot.com",
    messagingSenderId: "758324726582"
  }
  )
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/home.html',
    controller: 'AppCtrl'
  })
  .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile/profile.html',
        }
      }
    })
  .state('login', {
            url: '/login',
            templateUrl: 'templates/login/login.html',
            controller:'loginController'
  })
  .state('register', {
            url: '/register',
            templateUrl: 'templates/register/register.html',
            controller:'registerController'
  })
  .state('forgot', {
      url: '/forgot',
      templateUrl: 'templates/forgot/forgot.html',
      controller:'forgotController'
    })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
})
.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})
;
