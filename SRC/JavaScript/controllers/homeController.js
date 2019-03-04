(function() {
    'use strict';

    angular
        .module('JenhaoApp')
        .controller('homeController', homeController);

    homeController.$inject = ['$scope'];

    function homeController($scope) {
        $scope.message = "Home Page";
        console.log("homeController");
    }
})();