/**
 *  menu.directive.js
 */

(function () {

    angular.module('navBarDirective', []).directive('menu', function () {
        return {
            restrict: "E",
            templateUrl: "app/directive/menu/menu.directive.html",
            scope: '=menuItems',
            controller: ['$scope',
                function ($scope) {
                    $scope.menuItems = [
                        {
                            header: "Home",
                            context: "home",
                            subMenuItems: []
                        },
                        {
                            header: "About",
                            context: "about",
                            subMenuItems: [
                                {
                                    header: "About Author",
                                    context: "" 
                                }
                            ]
                        }
                    ];
                    console.log($scope.menuItems);
                }
            ]
        };
    });

})();