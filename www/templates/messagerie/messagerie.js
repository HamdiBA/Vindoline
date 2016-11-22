'Use Strict';
angular.module('starter').controller('messagerieController', function ($scope, $state, $localStorage, $location, $http, $ionicPopup, $firebaseAuth, $firebaseObject, $log, Auth, FURL, Utils, $ionicModal, Conversation) {
    $scope.modal = {};
    $scope.user = { firstname: "Elisa", lastname: "Laurent", nomComplet:"Elisa Laurent", imageProfil:"img/bonhomme.jpg" };
    $scope.voirConv = {};
    $scope.message = {};
    $scope.conversation = {};
    
    $scope.messagerie = [
        {
            user: "Jean Martin",imageProfil:"img/homme.jpg", messages:
                [
              { message: "Alors tu fais quoi de beau maintenant ?", date: "22 novembre", heure: "11h43", auteur: $scope.user.firstname + " " + $scope.user.lastname },
              { message: "Salut !", date: "22 novembre", heure: "11h43", auteur: $scope.user.firstname + " " + $scope.user.lastname },
              { message: "Hey !" , date: "22 novembre", heure: "11h43", auteur: "Jean Martin" }
            ]
        },
        {user: "Maria Jambon",imageProfil:"img/femme.jpg", messages:
            [
          { message: "Bonjour, Oui. Le poste est ... .. .... .... ..... .... ", date: "22 novembre", heure: "11h43", auteur: "Maria Jambon" },
          { message: "Bonjour, votre offre pourrait m'intéressé, puis je en savoir plus sur le poste ?  !", date: "22 novembre", heure: "15h21", auteur: $scope.user.firstname + " " + $scope.user.lastname },
          { message: "Bonjour, je suis interessé par votre profil, je cherche un dévelopeur web senior pour mon entreprise XXX basé à Grenoble. Êtes vous interessé ? Cordialement ", date: "22 novembre", heure: "13h43", auteur: "Maria Jambon" }
            ]
}
    ];
    $ionicModal.fromTemplateUrl('templates/messagerie/newConversation.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.newConversation = function () {
        $scope.modal.show();
    };
    $ionicModal.fromTemplateUrl('templates/messagerie/conversation.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.voirConv = modal;
    });
    $scope.modal.hide = function () {
        $scope.modal.hide();
    };
    $scope.nouveauMessage = function (message) {
        console.log(message);
        $scope.messagerie.push({ user: message.user, imageProfil:"img/bonhomme.jpg",messages: [{ message: message.texte, date: new Date(), heure:new Date()}]});
        $scope.modal.hide();
    };
    $scope.voirConversation = function (m) {
        $scope.conversation = m;
        console.log(m);
        $scope.voirConv.show();
    };
});