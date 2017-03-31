( function() {

    "use strict";

    angular.module( "app.canvas" )
        .directive( "appCanvas", appCanvas );

    appCanvas.$inject = [ "$timeout", "$window", "canvasSize" ];

    function appCanvas( $timeout, $window, canvasSize ) {
        var directive = {
            restrict: "EA",
            require: "^appAdjustWidth",
            controllerAs: "vmCY",
            controller: controller,
            link: link
        }
        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            var canvasWrapper = vm.canvasWrapper;

            scope.adjusted = {
                width: canvasWrapper.offsetWidth - 25,
                height: ( canvasWrapper.offsetWidth - 25 ) / 1.37775061124
            }
        }
    }
} )();
