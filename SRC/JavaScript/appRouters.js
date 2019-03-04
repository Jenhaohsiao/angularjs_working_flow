var myApp = angular.module('JenhaoApp', ['ngRoute']);


myApp.config(function($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "SRC/views/home.html",
            // template: '<h1>Hello</h1>',
            controller: 'homeController'
        })
        .when("/courses", {
            templateUrl: "SRC/views/courses.html",
            controller: "coursesController"
        })
        .when("/students", {
            templateUrl: "SRC/views/students.html",
            controller: "studentsController"
        })

})




// myApp.config(function($stateProvider) {
//     var helloState = {
//         name: 'hello',
//         url: '/hello',
//         // templateUrl: 'views/helloView.html',
//         template: '<h3 style="color:green;">{{title}}</h3>',
//         controller: "HelloController"
//     }

//     var aboutState = {
//         name: 'about',
//         url: '/about',
//         template: '<h3 style="color:red;">Its the UI-Router hello world app!</h3>'
//     }

//     $stateProvider.state(helloState);
//     $stateProvider.state(aboutState);
// });