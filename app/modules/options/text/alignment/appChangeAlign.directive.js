( function() {

    "use strict";

    angular.module( "app.alignment" )
        .directive( "appChangeAlign", appChangeAlign );

    appChangeAlign.$inject = [ "storeText", "alignment" ];

    function appChangeAlign( storeText, alignment ) {
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

            vm.align = alignment.current;

            scope.$watchCollection( function() {

                return vm.align[ 0 ];

            }, function( newValue, oldValue ) {

                if ( newValue === oldValue ) {
                    return;
                }

                alignment.type[ 0 ] = newValue

                switch ( newValue ) {
                    case "left":
                        alignment.position[ 0 ] = 50;
                        break;
                    case "center":
                        alignment.position[ 0 ] = element[ 0 ].width / 2;
                        break;
                    case "right":
                        alignment.position[ 0 ] = element[ 0 ].width - 50;
                        break;
                }

                if ( storeText.textes.length !== 0 ) {
                    vm.modifyTextOnCanva();
                }
            } );
        }
    }

} )();
