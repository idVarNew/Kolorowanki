( function() {

    "use strict";

    angular.module( "app.reset" )
        .directive( "appClearCanvasPainting", appClearCanvasPainting );

    appClearCanvasPainting.$inject = [ "storeClearing" ];

    function appClearCanvasPainting( storeClearing ) {
        var directive = {
            restrict: "EA",
            controller: controller,
            link: link
        }
        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.clearCanvas = storeClearing.clear;

            scope.$watchCollection( function() {
                return vm.clearCanvas[ 0 ];
            }, function( newValue, oldValue ) {

                if ( newValue === oldValue ) {
                    return;
                }
                element[ 0 ].getContext( "2d" ).clearRect( 0, 0, element[ 0 ].width, element[ 0 ].height );
            } );

        }
    }
} )();
