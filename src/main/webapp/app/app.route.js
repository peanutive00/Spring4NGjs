/**
 * app.route.js
 */

(function(){

    var app = angular.module('appRouter', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

                .state('home', {
                    url: '/home',
                    templateUrl: 'app/component/home/home.html'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'app/component/about/about.html'
                });

    });

})();

