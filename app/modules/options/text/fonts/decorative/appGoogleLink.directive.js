( function() {

    "use strict";

    angular.module( "app.decorativeFonts" )
        .directive( "appGoogleLink", appGoogleLink );

    appGoogleLink.$inject = [ "googleLink" ];

    function appGoogleLink( googleLink ) {
        var directive = {
            restrict: "AE",
            controllerAs: "vmGL",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.googleHeaderLink = googleLink.fontName;

            scope.$watchCollection( function() {
                return vm.googleHeaderLink;
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }
                vm.googleLink = googleLink.fontName[ 0 ];
            } );
        }

    }

} )();
