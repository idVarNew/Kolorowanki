( function() {
    "use strict";

    angular
        .module( "app.intro" )
        .service( "intro", intro )

    function intro() {
        this.page = [];
    }

}() );
