var gulp = require( "gulp" );

// plugins
var concat = require( "gulp-concat" ),
    rename = require( "gulp-rename" ),
    uglify = require( "gulp-uglify" ),
    autoprefixer = require( "gulp-autoprefixer" );

// concat, rename, uglify
gulp.task( "cru", cru );
// autoprefixer
gulp.task( "ap", ap );
// watch
gulp.task( "watch", watch );

function cru() {
    var app = "../../app/**/*.js",
        jsDest = "../../assets/js";

    return gulp.src( app )
        .pipe( concat( "scripts.js" ) )
        .pipe( gulp.dest( jsDest ) )
        .pipe( rename( "scripts.min.js" ) )
        .pipe( uglify() )
        .pipe( gulp.dest( jsDest ) );
}

function ap() {
    return gulp.src( "../../assets/css/styles.css" )
        .pipe( autoprefixer() )
        .pipe( gulp.dest( "../../assets/css" ) )
}

function watch() {
    gulp.watch( "../../assets/css/styles.css", [ "ap", ] );
    gulp.watch( "../../app/**/*.js", [ "cru", ] );
}
