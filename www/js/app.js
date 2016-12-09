// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngStorage', 'ngCordova', 'firebase', 'ngMessages', 'starter.directives'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
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
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('welcome', {
        url: '/welcome',
        templateUrl: 'templates/welcome/welcome.html',
        controller: 'welcomeController'
      })

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        controller: 'AppCtrl'
      })

      .state('app.home', {
        url: '/home',
        views: {
          'home-tab': {
            templateUrl: 'templates/home/home.html',
            controller: 'homeController'
          }
        }
      })

      .state('app.post', {
        url: '/post/:id',
        views: {
          'home-tab': {
              templateUrl: 'templates/home/post.html',
              controller: 'homeController'
          }
        }
      })
          .state('autrepagepro', {
              url: '/autrepagepro',
              controller: 'creerPageProCtrl',
              templateUrl: 'templates/professionnel/autrepagepro.html'
          })

      .state('profile', {
        url: '/profile',
        controller: 'profilController',
        templateUrl: 'templates/profile/profile.html'
      })


      .state('app.notification', {
        url: '/notification',
        views: {
          'notification-tab': {
            templateUrl: 'templates/notification/notification.html',
          }
        }
      })
      .state('app.messagerie', {
        url: '/messagerie',
        views: {
          'messagerie-tab': {
            templateUrl: 'templates/messagerie/messagerie.html',
            controller: "messagerieController"
          }
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login/login.html',
        controller: 'loginController'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'templates/register/register.html',
        controller: 'registerController'
      })
      .state('forgot', {
        url: '/forgot',
        templateUrl: 'templates/forgot/forgot.html',
        controller: 'forgotController'
      })
      .state('contacts', {
        url: '/contacts',
        templateUrl: 'templates/contacts/contacts.html',
        controller: 'contactController'
      })
      .state('candidacy', {
        url: '/candidacy',
        templateUrl: 'templates/candidacy/candidacy.html',
        controller: 'candidacyCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'templates/settings/settings.html',
        controller: 'settingsCtrl'
      })
      .state('creerpagepro', {
        url: '/creerpagepro',
        templateUrl: 'templates/professionnel/creerPagePro.html',
        controller: 'creerPageProCtrl'
      })
      .state('pagepro', {
        url: '/pagepro',
        templateUrl: 'templates/professionnel/pagePro.html',
        controller: 'creerPageProCtrl'
      })
      .state('ajouterannonce', {
          url: '/ajouterannonce',
          templateUrl: 'templates/professionnel/ajouterAnnonce.html',
          controller: 'creerPageProCtrl'
      })
        .state('annonces', {
            url: '/annonces',
            templateUrl: 'templates/professionnel/annonces.html',
            controller: 'creerPageProCtrl'
        })
        .state('annonce', {
            url: '/annonce',
            templateUrl: 'templates/professionnel/annonce.html',
            controller: 'creerPageProCtrl'
        });;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/welcome');
  })
  .directive('noScroll', function ($document) {

    return {
      restrict: 'A',
      link: function ($scope, $element, $attr) {

        $document.on('touchmove', function (e) {
          e.preventDefault();
        });
      }
    }
  })

  //.config(function ($ionicConfigProvider) {
  //  $ionicConfigProvider.tabs
  //    .position('bottom')
  //    .style('standard');
  //});





