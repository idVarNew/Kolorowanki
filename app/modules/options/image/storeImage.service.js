( function() {
    "use strict";

    angular
        .module( "app.image" )
        .service( "storeImage", storeImage )

    function storeImage() {

        this.imageInUse = [];

        this.storedImage = [];

        this.allImages = [
            "assets/img/obrazek.png",
            "assets/img/obrazek2.png",
            "assets/img/obrazek3.png",
            "assets/img/obrazek4.png"
        ];
    }


}() );
