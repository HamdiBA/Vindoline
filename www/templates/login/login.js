'Use Strict';
angular.module('starter').controller('loginController', function ($scope, $state, $localStorage, $location,$http,$ionicPopup,$firebaseAuth , $firebaseObject,$log, Auth, FURL, Utils) {
 
    //var ref = new Firebase(FURL);
  var auth = $firebaseAuth();
  //firebase.initializeApp(FURL);
  var ref = firebase.database().ref();
  var userkey = "";
  $localStorage.email ="";
  $scope.signIn = function (user) {
      console.log("bah");
      $state.go('app.home');
    $log.log("Enviado");
    //if(angular.isDefined(user)){
    //Utils.show();
    //Auth.login(user)
    //  .then(function(authData) {

    //  $log.log("id del usuario:" + JSON.stringify(authData));
    //  $log.log("email:" + authData.email);
    //  //saving user info
    //  $localStorage.email = authData.email;
    //   Utils.hide();
    //  $state.go('app.home');
    //  $log.log("Starter page","Home");

    //  }, function(err) {
    //    Utils.hide();
    //     Utils.errMessage(err);
    //  });
   // }
  };
  $scope.loginWithGoogle =  function(){
    //TODO Google
  };

  $scope.loginWithFacebook =  function(){
    //TODO facebook
  };

  $scope.loginWithTwitter =  function(){
    //TODO twitter
  };


});
