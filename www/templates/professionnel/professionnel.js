'Use Strict';
angular.module('starter').controller('creerPageProCtrl', function ($scope, $rootScope, $state, $localStorage, $location, $http, $ionicPopup, $firebaseAuth, $firebaseObject, $log, Auth, FURL, Utils, $ionicModal, Conversation, $ionicHistory) {
    $scope.pagepro = {
        nom: "Atos",
        description: "Atos SE (Société Européenne), est une entreprise leader de services numériques avec un chiffre d’affaires annuel de 12 milliards d’euros et 100 000 collaborateurs dans 72 pays. Atos fournit à ses clients du monde entier des services de conseil et d’intégration de systèmes, d’infogérance, de Big Data et de Sécurité, d’opérations Cloud et des services transactionnels par l’intermédiaire de Worldline, le leader européen et un acteur mondial dans les services de paiement. Grâce à son expertise technologique et sa connaissance sectorielle pointue, Atos sert des clients dans différents secteurs : Industrie, Distribution, Transports, secteur Public, Santé, Services financiers, Télécoms, Défense et Sécurité, Médias et Services. \n Atos déploie les technologies qui accélèrent le développement de ses clients et les aident à réaliser leur vision de l’entreprise du futur. Atos est le partenaire informatique mondial des Jeux Olympiques et Paralympiques. Le Groupe est coté sur le marché Euronext Paris et exerce ses activités sous les marques Atos, Atos Consulting, Atos Worldgrid, Bull, Canopy, Unify etWorldline.",
        lieu: "95877 Bezons, France",
        tailleentreprise: "+ de 10 000 employés",
        site: "http://atos.net",
        secteur: "Technologies et services de l’information"
    };
    $scope.goBack = function () {
        $state.go("app.home");
    };
    $ionicHistory.nextViewOptions({
        disableBack: true
    });

    $scope.creerPagePro = function () {
        $rootScope.user.aPagePro = true;
        var obj = { nom: $scope.pagepro.nom, lieu: $scope.pagepro.lieu, secteur: $scope.pagepro.secteur, description: $scope.pagepro.description, siteweb: $scope.pagepro.site, tailleEnt: $scope.pagepro.tailleentreprise, image: "../../img/atos.jpg" };
        $rootScope.pagePro = obj;
        console.log($rootScope.pagePro);
        $state.go("pagepro");
    };
});