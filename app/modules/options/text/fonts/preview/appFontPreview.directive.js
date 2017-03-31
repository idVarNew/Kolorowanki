( function() {

    "use strict";

    angular.module( "app.previewFonts" )
        .directive( "appFontPreview", appFontPreview );

    appFontPreview.$inject = [ "storeFonts" ];

    function appFontPreview( storeFonts ) {
        var directive = {
            restrict: "AE",
            controllerAs: "vmCF",
            templateUrl: "app/modules/options/text/fonts/preview/fontPreview.html",
            replace: true,
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.currentFont = {};
            vm.currentFont.display = "Georgia";

            vm.allFonts = storeFonts.current.storedFont;

            scope.$watchCollection( function() {
                return vm.allFonts;
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }
                vm.currentFont.display = storeFonts.current.storedFont[ 0 ];

            } );
        }
    }
} )();
