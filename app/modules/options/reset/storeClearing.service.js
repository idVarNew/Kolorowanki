( function() {
    "use strict";

    angular
        .module( "app.reset" )
        .service( "storeClearing", storeClearing )

    function storeClearing() {
        this.clear = [];
    }

}() );
