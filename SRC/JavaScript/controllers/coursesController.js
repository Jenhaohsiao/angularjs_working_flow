(function() {
    'use strict';

    angular
        .module('JenhaoApp')
        .controller('coursesController', coursesController);

    coursesController.$inject = ['$scope'];

    function coursesController($scope) {
        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server", "AngularJS", "JavaScript"];
    }
})();