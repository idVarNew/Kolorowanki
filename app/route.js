( function() {
    angular
        .module( "app" )
        .config( config )

    config.$inject = [ "$routeProvider", "$locationProvider" ];

    function config( $routeProvider, $locationProvider ) {
        $routeProvider
            .when( "/", {
                templateUrl: "app/shared/pages/main.html",
                controller: "mainPage"
            } )
            .when( "/about-app", {
                templateUrl: "app/shared/pages/about-app.html",
                controller: "notMainPage"
            } )
            .when( "/about-me", {
                templateUrl: "app/shared/pages/about-me.html",
                controller: "notMainPage"
            } )

            .otherwise( {
                redirectTo: "/"
            } );

        $locationProvider.html5Mode( true );
    }

}() );
