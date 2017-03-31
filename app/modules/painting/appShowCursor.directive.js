( function() {

    "use strict";

    angular.module( "app.painting" )
        .directive( "appShowCursor", appShowCursor );

    appShowCursor.$inject = [ "setCursor", "getBrushes" ];

    function appShowCursor( setCursor, getBrushes ) {
        var directive = {
            restrict: "EAC",
            controllerAs: "vmCursor",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            var canvas = element[ 0 ],
                context = canvas.getContext( "2d" );

            vm.cursor = setCursor.cursor.stored[ 0 ]

            scope.$watch( function() {
                return setCursor.cursor.current
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }
                vm.cursor = setCursor.cursor.current
                setCursor.cursor.stored[ 0 ] = setCursor.cursor.current
            } );
        }
    }

} )();
