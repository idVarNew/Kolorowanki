( function() {
    "use strict";

    angular
        .module( "app.painting" )
        .service( "setCursor", setCursor )

    function setCursor() {

        this.cursor = {
            current: "",
            brush: [],
            stored: []
        }
    }

}() );
