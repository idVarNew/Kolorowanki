( function() {

    "use strict";

    angular.module( "app.intro" )
        .directive( "appIntroImage", appIntroImage );

    appIntroImage.$inject = [ "intro" ];

    function appIntroImage( intro ) {
        var directive = {
            restrict: "EA",
            controllerAs: "vmIntro",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.introImage = intro.page[ 0 ]
            vm.page = intro.page;

            scope.$watchCollection( function() {
                return vm.page[ 0 ];
            }, function( newValue, oldValue ) {

                if ( newValue === oldValue ) {
                    return;
                }
                vm.introImage = true;
                intro.page[ 0 ] = true;
            } );
        }
    }


} )();
