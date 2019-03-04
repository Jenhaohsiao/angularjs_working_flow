 (function() {
     'use strict';

     angular
         .module('JenhaoApp')
         .controller('HelloController', HelloController);

     HelloController.$inject = ['$scope', '$state'];

     function HelloController($scope, $state) {

         console.log("This is HelloController")

         $scope.title = "This is Hello page title"
     }
 })();