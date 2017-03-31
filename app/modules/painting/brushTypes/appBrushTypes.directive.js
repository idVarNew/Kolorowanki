( function() {

    "use strict";

    angular.module( "app.brushTypes" )
        .directive( "appBrushTypes", appBrushTypes );

    appBrushTypes.$inject = [ "getBrushes", "setCursor", "eraser" ];

    function appBrushTypes( getBrushes, setCursor, eraser ) {

        var directive = {
            restrict: "EA",
            templateUrl: "app/modules/painting/brushTypes/brushTypes.html",
            replace: true,
            controllerAs: "vmBrushes",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.brushes = {};
            vm.brushes.eraser = eraser.eraser
            vm.brushes.all = getBrushes.types;
            vm.brushes.selected = "assets/img/brush.svg";
            vm.brushes.select = selectBrush;

            function selectBrush( brush ) {

                if ( brush.type === "butt" ) {
                    setCursor.cursor.current = "cursor-pencil";
                    setCursor.cursor.brush[ 0 ] = "cursor-pencil";
                }
                if ( brush.type === "round" ) {
                    setCursor.cursor.current = "cursor-brush";
                    setCursor.cursor.brush[ 0 ] = "cursor-brush";
                }
                if ( brush.type === "square" ) {
                    setCursor.cursor.current = "cursor-pen";
                    setCursor.cursor.brush[ 0 ] = "cursor-pen";
                }

                vm.brushes.selected = brush.url;
                vm.brushes.selectedType = brush.type;
                getBrushes.brush.stored[ 0 ] = brush.type;

                if ( vm.brushes.eraser.selected[ 0 ] === true ) {
                    vm.brushes.eraser.selected[ 0 ] = false;
                }

            }
        }
    }

} )();
