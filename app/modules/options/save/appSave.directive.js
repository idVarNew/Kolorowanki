( function() {

    "use strict";

    angular.module( "app.save" )
        .directive( "appSavePicture", appSavePicture );

    appSavePicture.$inject = [ "pages" ];

    function appSavePicture( pages ) {
        var directive = {
            restrict: "EA",
            replace: true,
            templateUrl: "app/modules/options/save/save.html ",
            link: link
        }

        return directive;

        function link( scope, element, attrs ) {

            element.bind( "click", function( e ) {
                if ( pages.isHome[ 0 ] === false ) {
                    e.preventDefault();
                } else {
                    var canvas1 = document.getElementById( "layer1" ),
                        canvas2 = document.getElementById( "layer2" ),
                        canvas3 = document.getElementById( "layer3" ),
                        canvas4 = document.getElementById( "layer4" ),
                        canvas5 = document.getElementById( "layer5" ),
                        context3 = canvas3.getContext( "2d" );

                    context3.drawImage( canvas5, 0, 0 );
                    context3.drawImage( canvas1, 0, 0 );
                    context3.drawImage( canvas2, 0, 0 );
                    context3.drawImage( canvas4, 0, 0 );

                    var download = canvas3.toDataURL( "image/png" );
                    download = download.replace( /^data:image\/[^;]*/, 'data:application/octet-stream' );
                    download = download.replace( /^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png' );
                    this.href = download;

                }
            } );
        }
    }
} )();
