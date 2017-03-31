( function() {

    "use strict";

    angular.module( "app.brushSizes" )
        .directive( "appBrushSizes", appBrushSizes );

    appBrushSizes.$inject = [ "getBrushSizes" ];

    function appBrushSizes( getBrushSizes ) {
        var directive = {
            restrict: "EA",
            templateUrl: "app/modules/painting/brushSizes/brushSizes.html",
            replace: true,
            controllerAs: "vmBrushSize",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {
            vm.sizes = {};
            vm.sizes.brushSizes = getBrushSizes.sizes;
            vm.sizes.selectedBrush = 2;

            vm.chooseBrushSize = function( size, index ) {
                vm.sizes.selectedBrush = index;
                vm.sizes.selectedBrushSize = size;
                getBrushSizes.brush.stored[ 0 ] = size;
            }
        }
    }

} )();
