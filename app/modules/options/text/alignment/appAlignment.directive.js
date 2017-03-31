( function() {

    "use strict";

    angular.module( "app.alignment" )
        .directive( "appAlignOptions", appAlignOptions );

    appAlignOptions.$inject = [ "alignment" ];

    function appAlignOptions( alignment ) {
        var directive = {
            restrict: "AE",
            controllerAs: "vmFA",
            controller: controller,
            templateUrl: "app/modules/options/text/alignment/alignment.html",
            replace: true,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {
            vm.alignment = {};
            vm.alignment.types = alignment.types;
            vm.alignment.selectedAlign = 1;

            vm.alignment.select = function( type, index ) {
                alignment.current[ 0 ] = type;
                vm.alignment.selectedAlign = index;
            }
        }
    }

} )();
