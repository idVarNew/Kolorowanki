( function() {

    "use strict";

    angular.module( "app.brushColors" )
        .directive( "appBrushColors", appBrushColors );

    appBrushColors.$inject = [ "getColors", "setCursor" ];

    function appBrushColors( getColors, setCursor ) {
        var directive = {
            restrict: "EA",
            templateUrl: "app/modules/painting/brushColors/brushColors.html",
            replace: true,
            controllerAs: "vmColors",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            var brush = getColors.brush;
            vm.colors = {};
            vm.colors.all = getColors.colors;
            vm.colors.selected = brush.stored[ 0 ];

            vm.select = function( color ) {
                vm.colors.selected = color;
                brush.current = color;
                brush.stored[ 0 ] = color;
                setCursor.cursor.current = setCursor.cursor.brush[ 0 ];
            }
        }
    }


} )();
