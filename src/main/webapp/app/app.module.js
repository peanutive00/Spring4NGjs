/**
 *  app.module.js
 */

var app = angular.module("app", ['appRouter']);

    /**
     * Contollers
     */
    app.controller('HomeCtrl', function($scope){
            $scope.message = "Home works !!!";
            console.log($scope.message);
        })
        .controller('AboutCtrl', function($scope){
            $scope.message = "About works !!!";
            console.log($scope.message);
        });
        