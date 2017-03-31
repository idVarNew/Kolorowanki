( function() {

    "use strict";

    angular.module( "app.standardFonts" )
        .directive( "appStandardFonts", appStandardFonts );

    appStandardFonts.$inject = [ "storeFonts" ];

    function appStandardFonts( storeFonts ) {
        var directive = {
            restrict: "AE",
            templateUrl: "app/modules/options/text/fonts/standard/standardFonts.html",
            replace: true,
            controllerAs: "vmFO",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {
            vm.standardFonts = {};
            vm.standardFonts.all = storeFonts.standard;

            vm.standardFonts.select = function( font ) {
                storeFonts.current.fontName[ 0 ] = font.name;
                storeFonts.current.storedFont[ 0 ] = font.name;
            }
        }
    }

} )();
