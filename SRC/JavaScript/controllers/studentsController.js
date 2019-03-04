(function() {
    'use strict';

    angular
        .module('JenhaoApp')
        .controller('studentsController', studentsController);

    studentsController.$inject = ['$scope'];

    function studentsController($scope) {
        $scope.students = ["Alex", "Jack", "Hele", "Tony", "Peter"];
    }
})();