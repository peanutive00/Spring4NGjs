/**
 * app.route.js
 */

var app = angular.module('appRouter', ['ui.router']);

/**
 * Routers
 */
app.config(function($stateProvider, $urlRouterProvider){
   
    $stateProvider
    
        .state('home', {
            url: '/home',
            templateUrl: './app/home/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: './app/about/about.html'
        });
    
});