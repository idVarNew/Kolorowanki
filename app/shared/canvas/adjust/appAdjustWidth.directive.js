( function() {

    "use strict";

    angular.module( "app.canvas" )
        .directive( "appAdjustWidth", appAdjustWidth );

    appAdjustWidth.$inject = [ "$window", "canvasSize", "setStorage" ];

    function appAdjustWidth( $window, canvasSize, setStorage ) {
        var directive = {
            restrict: "AE",
            controller: [ "$scope", "$element", function( $scope, $element ) {
                this.canvasWrapper = $element[ 0 ];
                canvasSize.width[ 0 ] = false;

                angular.element( $window ).bind( "resize", function() {
                    canvasSize.size.width[ 0 ] = $element[ 0 ].offsetWidth
                    canvasSize.width[ 0 ] = $element[ 0 ].offsetWidth
                    $scope.$digest();
                } )
            } ]
        }
        return directive;
    }
} )();
