( function() {

    "use strict";

    angular.module( "app.reset" )
        .directive( "appClearCanvas", appClearCanvas );

    appClearCanvas.$inject = [ "storeImage" ];

    function appClearCanvas( storeImage ) {
        var directive = {
            restrict: "EA",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.sImage = storeImage.imageInUse;

            scope.$watchCollection( function() {
                return vm.sImage
            }, function( newValue, oldValue ) {

                if ( newValue === oldValue ) {
                    return;
                }

                element[ 0 ].getContext( "2d" ).clearRect( 0, 0, element[ 0 ].width, element[ 0 ].height );

            } );

        }
    }

} )();
