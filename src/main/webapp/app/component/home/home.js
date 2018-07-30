/**
 * home.js
 */

(function(){
    
    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl($scope) {
        $scope.message = "Home works !!!";
        console.log($scope.message);
    }
    
})();