'Use Strict';
angular.module('starter').controller('messagerieController', function ($scope,$rootScope, $state, $localStorage, $location, $http, $ionicPopup, $firebaseAuth, $firebaseObject, $log, Auth, FURL, Utils, $ionicModal, Conversation,$ionicHistory) {
    $scope.modal = {};
    $scope.voirConv = {};
    $scope.message = {};
    $scope.conversation = {};
    $scope.input = {};
    
    $scope.messagerie = [
        {
            user: "Jean Martin",imageProfil:"img/homme.jpg", messages:
                [
              { message: "Alors tu fais quoi de beau maintenant ?", date: "22 novembre 2016", heure: "à 11h40", auteur: $rootScope.user.firstname + " " + $rootScope.user.lastname },
              { message: "Salut !", date: "22 novembre 2016", heure: "à 11h43", auteur: $rootScope.user.firstname + " " + $rootScope.user.lastname },
              { message: "Hey !", date: "22 novembre 2016", heure: "à 11h45", auteur: "Jean Martin" }
            ]
        },
        {user: "Maria Jambon",imageProfil:"img/femme.jpg", messages:
            [
                 { message: "Bonjour, je suis interessé par votre profil, je cherche un dévelopeur web senior pour mon entreprise XXX basé à Grenoble. Êtes vous interessé ? Cordialement ", date: "22 novembre 2016", heure: " à 13h43", auteur: "Maria Jambon" }
          ,
           { message: "Bonjour, votre offre pourrait m'intéressé, puis je en savoir plus sur le poste ?  !", date: "22 novembre2016 ", heure: "à 15h21", auteur: $rootScope.user.firstname + " " + $rootScope.user.lastname },

          { message: "Bonjour, Oui. Le poste est bla bla bla. ", date: "22 novembre 2016 ", heure: "à 11h43", auteur: "Maria Jambon" },
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
        var date = new Date();
        var jour = date.getDate();
        var mois = getMois(date.getMonth());
        var annee = date.getFullYear();
        var heure = date.getHours();
        var minute = date.getMinutes();
        var obj = { user: message.user, imageProfil: "img/bonhomme.jpg", messages: [{ message: message.texte, date: jour + " " + mois + " " +annee, heure:" à "+ heure +"h" + minute, auteur: $rootScope.user.firstname + " " + $rootScope.user.lastname }] };
        $scope.messagerie.push(obj);
        $scope.modal.hide();
        $scope.conversation = obj;
        $scope.voirConv.show();
    };
    $scope.voirConversation = function (m) {
        $scope.conversation = m;
        console.log(m);
        $scope.voirConv.show();
    };
    $scope.repondreMessage = function (texte,message) {
        console.log(message, texte);
        var date = new Date();
        var jour = date.getDate();
        var mois = getMois(date.getMonth());
        var annee = date.getFullYear();
        var heure = date.getHours();
        var minute = date.getMinutes();
        var index = $scope.messagerie.indexOf(message);
        console.log(index, $scope.messagerie[index]);
        $scope.messagerie[index].messages.push({ message: texte, date: jour + " " + mois + " " + annee, heure: " à " + heure + "h" + minute, auteur: $rootScope.user.firstname + " " + $rootScope.user.lastname });
        $scope.input.message = "";
        
    };
    $scope.goBack = function () {
        $scope.voirConv.hide();
    };
    function getMois(numMois) {
        switch (numMois) {
            case 0: return "janvier"; break;
            case 1: return "février"; break;
            case 2: return "mars"; break;
            case 3: return "avril"; break;
            case 4: return "mai"; break;
            case 5: return "juin"; break;
            case 6: return "juillet"; break;
            case 7: return "août"; break;
            case 8: return "septembre"; break;
            case 9: return "octobre"; break;
            case 10: return "novembre"; break;
            case 11: return "décembre"; break;
        };
    }
});