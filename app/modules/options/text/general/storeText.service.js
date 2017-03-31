( function() {
    "use strict";

    angular
        .module( "app.text" )
        .service( "storeText", storeText )

    function storeText() {
        this.textes = [];
    }

}() );
