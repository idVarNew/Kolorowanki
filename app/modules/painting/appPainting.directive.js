( function() {

    "use strict";

    angular.module( "app.painting" )
        .directive( "appPainting", appPainting );

    appPainting.$inject = [ "getColors", "getBrushSizes", "getBrushes", "eraser", "setCursor" ];

    function appPainting( getColors, getBrushSizes, getBrushes, eraser, setCursor ) {

        var directive = {
            restrict: "EA",
            replace: true,
            templateUrl: "app/shared/canvas/canvas.html",
            link: link
        }

        return directive;

        function link( scope, element ) {

            var canvas = element[ 0 ].querySelector( "#layer1" ),
                canvas2 = element[ 0 ].querySelector( "#layer2" ),
                context = canvas.getContext( "2d" ),
                context2 = canvas2.getContext( "2d" ),
                eraserSettings = {
                    color: "#fff",
                    type: "round"
                },
                pos = {
                    x: 0,
                    y: 0
                },
                color = getColors.brush,
                size = getBrushSizes.brush,
                type = getBrushes.brush;

            scope.$watchCollection( function() {
                return getBrushes.brush.stored[ 0 ];
            }, function( newValue, oldValue ) {

                if ( newValue === oldValue ) {
                    return;
                }

                type.current = newValue;
                type.stored[ 0 ] = newValue;
                color.current = color.stored[ 0 ];

            } );

            scope.$watchCollection( function() {
                return getBrushSizes.brush.stored[ 0 ];
            }, function( newValue, oldValue ) {

                if ( newValue === oldValue ) {
                    return;
                }
                size.current = newValue;
                size.stored[ 0 ] = newValue;

            } );

            scope.$watchCollection( function() {
                return getColors.brush.stored[ 0 ];
            }, function( newValue, oldValue ) {

                if ( newValue === oldValue ) {
                    return;
                }

                color.current = newValue;
                color.stored[ 0 ] = newValue;
                type.current = type.stored[ 0 ];
                eraser.eraser.selected[ 0 ] = false;
            } );

            scope.$watchCollection( function() {
                return eraser.eraser.selected[ 0 ];
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }

                if ( newValue === true ) {
                    color.current = eraserSettings.color;
                    type.current = eraserSettings.type;
                } else {
                    color.current = color.stored[ 0 ];
                    type.current = type.stored[ 0 ];
                }

            } );

            element.bind( "mousemove", draw );
            element.bind( "mousedown", setPosition );
            element.bind( "mouseenter", setPosition );

            function draw( e ) {
                if ( e.buttons !== 1 ) {
                    return;
                }
                context.beginPath();

                // painitng options
                context.strokeStyle = color.current; // color
                context.lineWidth = size.current; // size
                context.lineCap = type.current; // brush type

                //drawing
                context.imageSmoothingEnabled = false;
                context.moveTo( pos.x, pos.y );
                setPosition( e );
                context.lineTo( pos.x, pos.y );
                context.stroke();

            }

            function setPosition( e ) {
                var rect = canvas2.getBoundingClientRect();
                pos.y = e.clientY - rect.top;
                pos.x = e.clientX - rect.left;

            }
        }
    }

} )();
