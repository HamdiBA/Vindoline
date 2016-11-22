angular.module('starter').factory('Conversation', function (FURL, $log, $firebaseAuth, $firebaseArray, $firebaseObject, Utils) {

    //var ref = new Firebase(FURL);

  //  firebase.initializeApp(FURL);
    //var auth = $firebaseAuth(ref);
    var ref = firebase.database().ref();
    console.log(firebase.database());
    var Conversation = {
        conv: {},

        login: function (user) {
            return auth.$signInWithEmailAndPassword(
              user.email, user.password
            );
        },
        creerConversation: function (uid, message,uidDest) {
            var conv = {
                id: uid,
                idDest: uidDest,
                message: message,
                date: Date()
            };

            var messagesRef = $firebaseArray(firebase.database().ref().child("conversations"));
            messagesRef.$add(conv);
            $log.log("Conversation Saved");
        },
    };
    return Conversation;

});
