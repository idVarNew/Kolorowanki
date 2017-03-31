( function() {
    "use strict";

    angular
        .module( "app.eraser" )
        .service( "eraser", eraser )

    function eraser() {

        this.eraser = {
            selected: [ false ],
        }
    }

}() );
