'Use Strict';
angular.module('starter').controller('creerPageProCtrl', function ($scope, $rootScope, $state, $localStorage, $location, $http, $ionicPopup, $firebaseAuth, $firebaseObject, $log, Auth, FURL, Utils, $ionicModal, Conversation, $ionicHistory) {
    $scope.pagepro = {
        nom: "Atos",
        description: "Atos SE (Société Européenne), est une entreprise leader de services numériques avec un chiffre d’affaires annuel de 12 milliards d’euros et 100 000 collaborateurs dans 72 pays. Atos fournit à ses clients du monde entier des services de conseil et d’intégration de systèmes, d’infogérance, de Big Data et de Sécurité, d’opérations Cloud et des services transactionnels par l’intermédiaire de Worldline, le leader européen et un acteur mondial dans les services de paiement. Grâce à son expertise technologique et sa connaissance sectorielle pointue, Atos sert des clients dans différents secteurs : Industrie, Distribution, Transports, secteur Public, Santé, Services financiers, Télécoms, Défense et Sécurité, Médias et Services. \n Atos déploie les technologies qui accélèrent le développement de ses clients et les aident à réaliser leur vision de l’entreprise du futur. Atos est le partenaire informatique mondial des Jeux Olympiques et Paralympiques. Le Groupe est coté sur le marché Euronext Paris et exerce ses activités sous les marques Atos, Atos Consulting, Atos Worldgrid, Bull, Canopy, Unify etWorldline.",
        lieu: "95877 Bezons, France",
        tailleentreprise: "+ de 10 000 employés",
        site: "http://atos.net",
        secteur: "Technologies et services de l’information",
    };
    $scope.modal = {};
    $scope.annonce = {};
    $ionicModal.fromTemplateUrl('templates/professionnel/annonce.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.goBack = function () {
        $state.go("app.home");
    };
    $ionicHistory.nextViewOptions({
        disableBack: true
    });
    $scope.creerPagePro = function () {
        $rootScope.user.aPagePro = true;
        var obj = { nom: $scope.pagepro.nom, lieu: $scope.pagepro.lieu, secteur: $scope.pagepro.secteur, description: $scope.pagepro.description, siteweb: $scope.pagepro.site, tailleEnt: $scope.pagepro.tailleentreprise, image: "../../img/atos.jpg", annonces: [] };
        $rootScope.pagePro = obj;
        console.log($rootScope.pagePro);
        $state.go("pagepro");
    };
    $scope.addAnnonce = function () {
        var a = { titre: $scope.annonce.titre, description: $scope.annonce.description, emploi: $scope.annonce.emploi, datePublication: getDateNow() };
        console.log(a);
        $rootScope.pagePro.annonces.push(a);
        $state.go("annonces");
    }
    $scope.voirAnnonce = function (annonce) {
        console.log(annonce);
        $scope.annonce = annonce;
      //  $state.go("annonce");
    }
    $scope.goBack = function () {
        $scope.modal.hide();
    };
    function getDateNow() {
        var date = new Date();
        var jour = date.getDate();
        var mois = getMois(date.getMonth());
        var annee = date.getFullYear();
        var heure = date.getHours();
        var minute = date.getMinutes();
        return jour + " " + mois + " " + annee;
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