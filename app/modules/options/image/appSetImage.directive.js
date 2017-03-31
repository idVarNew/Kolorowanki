( function() {

    "use strict";

    angular.module( "app.image" )
        .directive( "appImagesModal", appImagesModal );

    appImagesModal.$inject = [ "$uibModal", "$log", "$document", "storeImage" ];

    function appImagesModal( $uibModal, $log, $document, storeImage ) {
        var directive = {
            restrict: "AE",
            replace: true,
            templateUrl: "app/modules/options/image/addingArea.html",
            controller: [ '$scope', function( $scope ) {
                var vm = this;
                vm.items = storeImage.allImages
                vm.animationsEnabled = true;

                vm.open = function( size, parentSelector, $scope ) {
                    var parentElem = parentSelector ? angular.element( $document[ 0 ].querySelector( ".images-modal" + parentSelector ) ) : undefined;
                    console.log( storeImage.imageInUse[ 0 ] + " open" )
                    var modalInstance = $uibModal.open( {
                        scope: $scope,
                        animation: vm.animationsEnabled,
                        ariaLabelledBy: "modal-title",
                        ariaDescribedBy: "modal-body",
                        windowClass: "images-modal",
                        templateUrl: "app/modules/options/image/imagesToChoose.html",
                        controller: [ "$scope", "$uibModalInstance", "items", "$uibModal", "storeImage", function( $scope, $uibModalInstance, items, $uibModal, storeImage ) {
                            var vm = this;
                            vm.items = items;
                            vm.selected = {
                                item: null,
                            };

                            vm.ok = function( $scope ) {
                                $uibModalInstance.close( vm.selected.item );
                                storeImage.storedImage[ 0 ] = vm.selected.item;

                                // choose image again
                                if ( storeImage.imageInUse[ 0 ] === true && vm.confirmation === false ) {
                                    storeImage.imageInUse[ 0 ] = false;
                                } else {
                                    storeImage.imageInUse[ 0 ] = true;
                                }
                            };

                            vm.cancel = function() {
                                $uibModalInstance.dismiss( "cancel" );
                            };

                            // if an image is selected
                            vm.highlight = function( index ) {
                                vm.highlighted = index;
                            }

                            // if an image is already in use
                            if ( storeImage.imageInUse[ 0 ] === true ) {
                                vm.imagesContainer = false; //  container with images is hidden
                                vm.confirmation = true;

                                // confirm you want to choose new image
                                vm.confirm = function() {
                                    vm.imagesContainer = true; // show container with images
                                    vm.confirmation = false;
                                }
                            } else {
                                vm.imagesContainer = true;
                                vm.confirmation = false;

                            }
                        } ],
                        controllerAs: "vmIM",
                        size: size,
                        appendTo: parentElem,
                        resolve: {
                            items: function() {
                                return vm.items;
                            }
                        }
                    } );

                    modalInstance.result.then( function( selectedItem, $scope ) {
                        vm.selected = selectedItem;

                    }, function() {
                        $log.info( "Modal dismissed at: " + new Date() );
                    } );
                }
                vm.toggleAnimation = function() {
                    vm.animationsEnabled = !vm.animationsEnabled;
                };
            } ],
            controllerAs: "vmIM"
        }

        return directive;

    }

} )();
