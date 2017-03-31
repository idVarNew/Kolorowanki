( function() {
    "use strict";

    angular
        .module( "app.brushSizes" )
        .service( "getBrushSizes", getBrushSizes )

    function getBrushSizes() {

        this.brush = {
            current: 15,
            stored: [ 15 ]
        }

        this.sizes = [ {
                size: 10
            },
            {
                size: 15
            },
            {
                size: 25
            },
            {
                size: 35
            },
            {
                size: 45
            }
        ];
    }


}() );
