( function() {

    "use strict";

    angular.module( "app.image" )
        .directive( "appAddImage", appAddImage );

    appAddImage.$inject = [ "storeImage", "storeText" ];

    function appAddImage( storeImage, storeText ) {
        var directive = {
            restrict: "EA",
            link: link
        }

        return directive;

        function link( scope, element, attrs ) {
            var canvas = element[ 0 ],
                context = element[ 0 ].getContext( "2d" ),
                img = new Image(),
                sImage = storeImage.imageInUse;

            img.onload = function() {
                context.drawImage( img, 0, 0, canvas.width, canvas.height );
            };

            scope.$watchCollection( function() {
                return sImage[ 0 ]
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }

                context.clearRect( 0, 0, canvas.width, canvas.height );
                img.src = storeImage.storedImage[ 0 ];
                storeImage.imageInUse[ 0 ] = true;

                if ( storeText.textes.length !== 0 ) {
                    storeText.textes[ 0 ] = ""
                    document.getElementById( "input-text" ).value = "";
                }
            } );
        }
    }

} )();
