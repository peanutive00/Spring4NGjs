/**
 *  menu.directive.js
 */

(function () {

    angular.module('navBarDirective', []).directive('menu', function () {
        return {
            restrict: "E",
            templateUrl: "app/directive/menu/menu.html",
            scope: '=menuItem',
            controller: ['$scope',
                function ($scope) {
                    $scope.menuItem = [
                        {
                            header: "Home",
                            context: "home",
                            subMenu: []
                        },
                        {
                            header: "About",
                            context: "about",
                            subMenu: []
                        }
                    ];
                    console.log($scope.menuItem);
                }
            ]
        };
    });

})();