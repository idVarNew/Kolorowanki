( function() {

    "use strict";

    angular.module( "app.canvas" )
        .directive( "appOnResize", appOnResize );

    appOnResize.$inject = [ "canvasSize" ];

    function appOnResize( canvasSize ) {
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
            var pageContent = document.getElementById( "page-content" );
            vm.canvasSizeChange = canvasSize.width;

            scope.$watchCollection( function() {
                return vm.canvasSizeChange[ 0 ];
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }

                if ( newValue >= element[ 0 ].width ) {
                    pageContent.classList.remove( "show-scroll" );
                } else {
                    pageContent.style.height = element[ 0 ].height + "px";
                    pageContent.classList.add( "show-scroll" );
                }
            } );
        }
    }
} )();
