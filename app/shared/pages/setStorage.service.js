( function() {
    "use strict";
    angular
        .module( "app" )
        .service( "setStorage", setStorage );

    setStorage.$inject = [ "storeCanvas", "getColors", "getBrushSizes", "getBrushes", "pages", "setCursor" ];

    function setStorage( storeCanvas, getColors, getBrushSizes, getBrushes, pages, setCursor ) {

        var canvasContent = storeCanvas.canvasContent;

        this.setData = function() {

            pages.isHome[ 0 ] = false;
            getColors.brush.current = getColors.brush.stored;
            getBrushSizes.brush.current = getBrushSizes.brush.stored;
            getBrushes.brush.current = getBrushes.brush.stored;
            setCursor.cursor.current = setCursor.cursor.stored[ 0 ]

            var canvas = document.getElementById( "layer1" ),
                canvas2 = document.getElementById( "layer2" ),
                canvas4 = document.getElementById( "layer4" ),
                canvas5 = document.getElementById( "layer5" )

            if ( canvas ) {
                canvasContent[ 0 ] = canvas.toDataURL();
                canvasContent[ 1 ] = canvas2.toDataURL();
                canvasContent[ 2 ] = canvas4.toDataURL();
                canvasContent[ 3 ] = canvas5.toDataURL();
            }
        }
    }
}() );
