( function() {

    "use strict";

    angular.module( "app.text" )
        .directive( "appAddText", appAddText );

    appAddText.$inject = [ "storeText" ];

    function appAddText( storeText ) {
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

            vm.textOnChange = storeText.textes;

            scope.$watchCollection( function() {
                return vm.textOnChange[ 0 ];
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }
                vm.modifyTextOnCanva();
            } );
        }
    }
} )();
