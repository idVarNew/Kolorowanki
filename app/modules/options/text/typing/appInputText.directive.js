( function() {

    "use strict";

    angular.module( "app.text" )
        .directive( "appInputText", appInputText );

    appInputText.$inject = [ "storeText" ];

    function appInputText( storeText ) {
        var directive = {
            restrict: "AE",
            controllerAs: "vmText",
            templateUrl: "app/modules/options/text/typing/inputText.html",
            replace: true,
            controller: controller,
            link: link
        }
        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.type = {};
            vm.type.text = function( text ) {
                storeText.textes[ 0 ] = text;
            }

            vm.type.removeText = function() {
                if ( storeText.textes.length > 0 ) {
                    vm.inputText.data = "";
                    storeText.textes[ 0 ] = "";
                }

            }
        }
    }

} )();
