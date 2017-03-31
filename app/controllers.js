( function() {
    angular
        .module( 'app' )
        .controller( 'mainController', mainController )
        .controller( 'mainPage', mainPage )
        .controller( 'notMainPage', notMainPage );

    mainController.$inject = [];
    mainPage.$inject = [ 'getStorage', ];
    notMainPage.$inject = [ 'setStorage', ];

    function mainController() {}

    function mainPage( getStorage ) {
        getStorage.getData();
    }

    function notMainPage( setStorage ) {
        setStorage.setData();
    }


}() );
