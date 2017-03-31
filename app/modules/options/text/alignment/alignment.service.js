( function() {

    "use strict";

    angular
        .module( "app.alignment" )
        .service( "alignment", alignment )

    function alignment() {

        this.current = [];
        this.type = [];
        this.position = [];

        this.types = [ {
            align: "left",
            icon: "glyphicon-align-left"
        }, {
            align: "center",
            icon: "glyphicon-align-center"
        }, {
            align: "right",
            icon: "glyphicon-align-right"
        } ];
    }

}() );
