( function() {
    "use strict";
    angular
        .module( "app.brushTypes" )
        .service( "getBrushes", getBrushes )

    function getBrushes() {

        this.brush = {
            current: "round",
            stored: [ "round" ],
        }

        this.types = [ {
            url: "assets/img/brush.svg",
            type: "round",
            name: "Pędzel"
        }, {
            url: "assets/img/pen.svg",
            type: "square",
            name: "Ołówek"
        }, {
            url: "assets/img/pencil.svg",
            type: "butt",
            name: "Długopis"
        } ]
    }

}() );
