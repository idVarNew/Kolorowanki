( function() {

    "use strict";

    angular.module( "app.decorativeFonts" )
        .directive( "appGoogleFonts", appGoogleFonts );

    appGoogleFonts.$inject = [ "$http", "$timeout", "storeFonts", "googleLink" ];

    function appGoogleFonts( $http, $timeout, storeFonts, googleLink ) {
        var directive = {
            restrict: "AE",
            controllerAs: "vmGF",
            templateUrl: "app/modules/options/text/fonts/decorative/googleFonts.html",
            replace: true,
            controller: controller,
            link: link
        }
        return directive;

        function controller() {
            var vm = this;
            vm.googleFonts = {};

            storeFonts.async().then( success, error )

            function success( response ) {
                var allFonts = response.data.items,
                    handwritingFonts = allFonts.filter( isHandwriting );

                function isHandwriting( font ) {
                    return font.category === "handwriting";
                }
                vm.googleFonts.handwriting = handwritingFonts;
            }

            function error( response ) {
                alert( "Error" );
            }
        }

        function link( scope, element, attrs, vm ) {

            vm.googleFonts.select = function( font ) {
                googleLink.fontName[ 0 ] = font;
                storeFonts.current.storedFont[ 0 ] = font;

                $timeout( function() {
                    storeFonts.current.fontName[ 0 ] = font;
                }, 1250 );

            }
        }
    }

} )();
