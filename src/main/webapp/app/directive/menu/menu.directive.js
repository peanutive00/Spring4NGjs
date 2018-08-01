/**
 *  menu.directive.js
 */

(function () {

    angular.module('navBarDirective', []).directive('menu', function () {
        return {
            restrict: "E",
            templateUrl: "app/directive/menu/menu.directive.html",
            controller: function ($scope) {

                $scope.menuItems = [
                    {
                        header: "Home",
                        context: "home",
                        subMenuItems: null
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
                
                $scope.showDropDown = function(value){
                    if(value.subMenuItems !== null)
                        return $mdOpenMenu();
                };
                
            }

        };
    });

})();