/**
 *  app.js
 */

var _myapp = angular.module("app", ['ngRoute']);
        
_myapp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    $routeProvider
            .when('/', {
                templateUrl: './components/home/home.html'
            });
            
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
}]);