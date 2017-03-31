( function() {

    "use strict";

    angular.module( "app.reset" )
        .directive( "appClearPainting", appClearPainting );

    appClearPainting.$inject = [ "storeClearing" ];

    function appClearPainting( storeClearing ) {
        var directive = {
            restrict: "AE",
            controllerAs: "vmClear",
            controller: controller,
            replace: true,
            templateUrl: "app/modules/options/reset/clearPainting.html",
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.clear = false;
            storeClearing.clear[ 0 ] = false;

            vm.select = function( model ) {
                if ( model === false ) {
                    storeClearing.clear[ 0 ] = true;
                    vm.clear = true;
                } else {
                    storeClearing.clear[ 0 ] = false;
                    vm.clear = false;
                }
            }
        }
    }


} )();
