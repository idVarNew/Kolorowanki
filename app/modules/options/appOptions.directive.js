( function() {

    "use strict";

    angular.module( "app.options" )
        .directive( "appOptions", appOptions );

    appOptions.$inject = [ "pages" ];

    function appOptions( pages ) {
        var directive = {
            restrict: "AE",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            scope.oneAtATime = true;
            scope.status = {
                isFirstOpen: true,
                isFirstDisabled: false
            };

            scope.inactive = false;
            vm.pages = pages.isHome;

            scope.$watchCollection( function() {
                return vm.pages[ 0 ];
            }, function( newValue, oldValue ) {

                if ( newValue === oldValue ) {
                    return;
                }
                if ( newValue === false ) {
                    scope.inactive = true;
                } else {
                    scope.inactive = false;
                }
            } );
        }
    }


} )();
