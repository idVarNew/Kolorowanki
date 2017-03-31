( function() {

    "use strict";

    angular.module( "app.previewFonts" )
        .directive( "appIsPolish", appIsPolish );

    appIsPolish.$inject = [ "storeFonts" ];

    function appIsPolish( storeFonts ) {
        var directive = {
            restrict: "AE",
            controllerAs: "vmPL",
            controller: controller,
            templateUrl: "app/modules/options/text/fonts/preview/isPolish.html",
            replace: true,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            var isPolish = storeFonts.noPolish;
            vm.currentFont = storeFonts.current.storedFont;
            vm.isPolish = {};
            vm.isPolish.message = "ma polskie litery";
            vm.isPolish.class = "letters-info";

            scope.$watchCollection( function() {
                return vm.currentFont[ 0 ];
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }
                var noPolishLetters = isPolish.some( hasPolishLetters )

                if ( noPolishLetters === true ) {
                    vm.isPolish.message = "nie ma polskich liter";
                    vm.isPolish.class = "letters-warning";
                } else {
                    vm.isPolish.message = "ma polskie litery";
                    vm.isPolish.class = "letters-info";
                }

                function hasPolishLetters( currentValue ) {
                    return currentValue === newValue;
                }

            } );
        }
    }


} )();
