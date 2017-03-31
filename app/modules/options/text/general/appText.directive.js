( function() {

    "use strict";

    angular.module( "app.text" )
        .directive( "appText", appText );

    appText.$inject = [ "storeText", "alignment", "storeFonts" ];

    function appText( storeText, alignment, storeFonts ) {
        var directive = {
            restrict: "E",
            template: "<canvas></canvas>",
            replace: "true",
            controller: [ "$element", function( $element ) {
                var canvas = $element[ 0 ],
                    context = canvas.getContext( "2d" );

                this.modifyTextOnCanva = function() {
                    context.font = "30px " + storeFonts.current.fontName[ 0 ];
                    context.clearRect( 0, 0, canvas.width, canvas.height );
                    context.textAlign = ( alignment.type[ 0 ] || "center" );
                    context.fillText( storeText.textes[ 0 ], ( alignment.position[ 0 ] || canvas.width / 2 ), ( canvas.height - 40 ) );
                }

            } ]
        }
        return directive;
    }

} )();
