( function() {
    "use strict";

    angular
        .module( "app.decorativeFonts" )
        .service( "googleLink", googleLink );

    function googleLink() {
        this.fontName = [];
    }

}() );
