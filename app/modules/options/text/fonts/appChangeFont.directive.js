( function() {

    "use strict";

    angular.module( "app.fonts" )
        .directive( "appChangeFont", appChangeFont );

    appChangeFont.$inject = [ "storeText", "storeFonts" ];

    function appChangeFont( storeText, storeFonts ) {
        var directive = {
            restrict: "AE",
            require: "appText",
            controller: controller,
            link: link
        }
        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.fontName = storeFonts.current.fontName;

            scope.$watchCollection( function() {
                return vm.fontName[ 0 ];
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }

                storeFonts.current.fontName[ 0 ] = storeFonts.current.storedFont[ 0 ];

                if ( storeText.textes.length !== 0 ) {
                    vm.modifyTextOnCanva();
                }
            } );
        }
    }

} )();
