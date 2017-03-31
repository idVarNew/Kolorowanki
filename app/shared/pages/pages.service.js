( function() {
    "use strict";
    angular
        .module( "app" )
        .service( "pages", pages )

    function pages() {
        this.isHome = [];
    }

}() );
