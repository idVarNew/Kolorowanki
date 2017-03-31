( function() {

    "use strict";

    angular.module( "app.intro" )
        .directive( "appIntroMessage", appIntroMessage );

    appIntroMessage.$inject = [ "pages", "$uibModal", "$log", "$document", "intro" ];

    function appIntroMessage( pages, $uibModal, $log, $document, intro ) {
        var directive = {
            restrict: "AE",
            replace: true,
            templateUrl: "app/modules/intro/introMessage.html",
            controller: controller,
            controllerAs: "vmWE",
        }

        return directive;

        function controller() {
            var vm = this;
            vm.animationsEnabled = true;

            vm.open = function( parentSelector ) {
                var parentElem = parentSelector ? angular.element( $document[ 0 ].querySelector( ".intro-modal" + parentSelector ) ) : undefined;

                var modalInstance = $uibModal.open( {
                    animation: vm.animationsEnabled,
                    ariaLabelledBy: "modal-title",
                    windowClass: "intro-modal",
                    ariaDescribedBy: "modal-body",
                    templateUrl: "introMessage.html",
                    backdrop: "static",
                    controllerAs: "vmWE",
                    controller: [ "$uibModalInstance", function( $uibModalInstance ) {
                        var vm = this;
                        vm.ok = function() {
                            intro.page.push( true );
                            $uibModalInstance.close();
                        };
                    } ]
                } );
                vm.toggleAnimation = function() {
                    vm.animationsEnabled = !vm.animationsEnabled;
                };
            };
        }
    }

} )();
