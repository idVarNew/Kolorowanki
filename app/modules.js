( function() {

    "use strict";

    angular.module( "app.canvas", [ "app.painting", "app.options", "app.image", "app.text", ] );
    // Painting
    angular.module( "app.painting", [ "app.brushColors", "app.brushTypes", , "app.brushSizes", "app.eraser" ] );
    angular.module( "app.brushColors", [] );
    angular.module( "app.brushTypes", [] );
    angular.module( "app.brushSizes", [] );
    angular.module( "app.eraser", [] );
    // Options
    angular.module( "app.options", [ "app.reset", "app.save" ] );
    angular.module( "app.reset", [] );
    angular.module( "app.save", [] );
    // Image
    angular.module( "app.image", [] );
    // text
    angular.module( "app.text", [ "app.alignment", "app.fonts", "app.typing" ] );
    angular.module( "app.alignment", [] );
    angular.module( "app.fonts", [] );
    angular.module( "app.typing", [] );
    //  Text - fonts
    angular.module( "app.fonts", [ "app.decorativeFonts", "app.standardFonts", "app.previewFonts", ] );
    angular.module( "app.decorativeFonts", [] );
    angular.module( "app.standardFonts", [] );
    angular.module( "app.previewFonts", [] );
    // Intro
    angular.module( "app.intro", [] );

}() );
