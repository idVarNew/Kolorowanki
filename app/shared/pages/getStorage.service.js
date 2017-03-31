( function() {
    "use strict";

    angular
        .module( "app" )
        .service( "getStorage", getStorage )

    getStorage.$inject = [ "storeCanvas", "getColors", "getBrushSizes", "getBrushes", "pages", "eraser", "setCursor" ];


    function getStorage( storeCanvas, getColors, getBrushSizes, getBrushes, pages, eraser, setCursor ) {
        var canvasContent = storeCanvas.canvasContent;

        this.getData = function() {

            pages.isHome[ 0 ] = true;
            setCursor.cursor.stored[ 0 ] = setCursor.cursor.current
            getBrushSizes.brush.current = getBrushSizes.brush.stored;

            if ( eraser.eraser.selected[ 0 ] === true ) {
                getColors.brush.current = "#fff";
                getBrushes.brush.current = "round";
            } else {
                getColors.brush.current = getColors.brush.stored;
                getBrushes.brush.current = getBrushes.brush.stored;
            }

            angular.element( document ).ready( function() {

                function getData( elementId, index ) {
                    if ( canvasContent.length > 0 ) {
                        var canvas = document.getElementById( elementId ),
                            context = canvas.getContext( "2d" ),
                            dataURL = canvasContent[ index ],
                            img = new Image;

                        img.src = dataURL;
                        img.onload = function() {
                            context.drawImage( img, 0, 0, canvas.width, canvas.height );
                        }
                    }
                }

                getData( "layer1", 0 );
                getData( "layer2", 1 );
                getData( "layer4", 2 );
                getData( "layer5", 3 );

            } )
        }
    }

}() );
