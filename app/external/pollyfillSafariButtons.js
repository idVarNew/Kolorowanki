if ( !MouseEvent.prototype.hasOwnProperty( "buttons" ) ) {
    var mousedown = 0;
    addEventListener( "mousedown", function( a ) {
        mousedown = a.button || 1
    } ), addEventListener( "mouseup", function() {
        mousedown = 0
    } ), Object.defineProperty( MouseEvent.prototype, "buttons", {
        get: function() {
            return mousedown
        }
    } )
}
