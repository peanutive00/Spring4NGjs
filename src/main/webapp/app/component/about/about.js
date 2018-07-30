/**
 * about.js
 */
(function(){
    
    angular
        .module('app')
        .controller('AboutCtrl', AboutCtrl);

    function AboutCtrl($scope) {
        $scope.message = "About works !!!";
        console.log($scope.message);
    }
    
})();
    