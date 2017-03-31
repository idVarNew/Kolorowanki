( function() {
    "use strict";

    angular
        .module( "app.canvas" )
        .service( "canvasSize", canvasSize )


    function canvasSize() {

        this.width = [];
        this.sWidth = [];

        this.size = {
            width: [],
            height: []
        }
    }


}() );
