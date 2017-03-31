( function() {

    "use strict";

    angular.module( "app.eraser" )
        .directive( "appEraser", appEraser );

    appEraser.$inject = [ "eraser", "setCursor" ];

    function appEraser( eraser, setCursor ) {
        var directive = {
            restrict: "AE",
            replace: true,
            controllerAs: "vmEraser",
            controller: controller,
            templateUrl: "app/modules/painting/eraser/eraser.html",
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.select = function() {
                eraser.eraser.selected[ 0 ] = true;
                setCursor.cursor.current = "cursor-eraser";
            }
        }
    }

} )();
