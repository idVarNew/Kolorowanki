( function() {

    "use strict";

    angular.module( "app.canvas" )
        .directive( "appBackground", appBackground )


    function appBackground() {
        var directive = {
            restrict: "EA",
            link: link
        }

        return directive;

        function link( scope, element, attrs ) {
            var canvas = element[ 0 ],
                context = canvas.getContext( "2d" );

            angular.element( document ).ready( function() {
                context.rect( 0, 0, canvas.width, canvas.height );
                context.fillStyle = "#fff";
                context.fill();
            } )
        }
    }

} )();
