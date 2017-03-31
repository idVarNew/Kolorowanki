( function() {
    "use strict";

    angular
        .module( "app.brushColors" )
        .service( "getColors", getColors )


    function getColors() {

        this.brush = {
            current: "#ff8a00",
            stored: [ "#ff8a00" ],
        }

        this.colors = [ {
            code: "#ff5142",

        }, {
            code: "#f57033",

        }, {
            code: "#ff8a00",

        }, {
            code: "#edb718",

        }, {
            code: "#efd31f",

        }, {
            code: "#f1f1f1",

        }, {
            code: "#38c1a0",

        }, {
            code: "#2bd2c9",

        }, {
            code: "#8ade82",

        }, {
            code: "#b5d455",

        }, {
            code: "#7fd542",

        }, {
            code: "#4a4a4a",

        } ];
    }

} )();
