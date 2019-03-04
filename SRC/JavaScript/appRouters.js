var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {
    var helloState = {
        name: 'hello',
        url: '/hello',
        template: '<h3 style="color:green;">Hello Page</h3>'
    }

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3 style="color:red;">Its the UI-Router hello world app!</h3>'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
});