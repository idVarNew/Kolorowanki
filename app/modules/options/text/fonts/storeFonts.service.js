( function() {
    "use strict";

    angular
        .module( "app.fonts" )
        .service( "storeFonts", storeFonts )

    storeFonts.$inject = [ "$http" ];

    function storeFonts( $http ) {

        this.current = {
            fontName: [],
            storedFont: []
        }

        this.async = function() {
            return $http.get( "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBaP-y495JRLMxcXn0zNd63MTFYwBbQv_o" )
        }

        this.standard = [ {
                name: "Georgia"
            },
            {
                name: "Courier New"
            },
            {
                name: "Tahoma"
            },
            {
                name: "Times New Roman"
            },
            {
                name: "Arial"
            },
            {
                name: "Arial Black"
            },
            {
                name: "Verdana"
            },
        ];

        this.noPolish = [
            "Handlee",
            "Coming Soon",
            "Tangerine",
            "Niconne",
            "Satisfy",
            "Permanent Marker",
            "Rock Salt",
            "Damion",
            "Bad Script",
            "Rancho",
            "Gochi Hand",
            "Nothing You Could Do",
            "Homemade Apple",
            "Alex Brush",
            "Neucha",
            "Calligraffitti",
            "Pinyon Script",
            "Rochester",
            "Mr Dafoe",
            "Leckerli One",
            "Sue Ellen Francisco",
            "Crafty Girls",
            "Walter Turncoat",
            "Merienda",
            "Schoolbell",
            "Lateef",
            "Merienda One",
            "Delius",
            "Herr Von Muellerhoff",
            "Mr De Haviland",
            "Arizonia",
            "Qwigley",
            "Short Stack",
            "Aladin",
            "Kristi",
            "Norican",
            "Bilbo Swash Caps",
            "Rouge Script",
            "Delius Swash Caps",
            "Euphoria Script",
            "Sofia",
            "Dawning of a New Day",
            "Sunshiney",
            "Aguafina Script",
            "Julee",
            "Condiment",
            "Vibur",
            "Delius Unicase",
            "Mrs Saint Delafield",
            "Meie Script",
            "Bilbo",
            "League Script",
            "Ruthie",
            "Lovers Quarrel",
            "Monsieur La Doulaise",
            "Molle",
            "Dr Sugiyama",
            "Felipa",
            "Mrs Sheppards",
            "Miss Fajardose",
            "Princess Sofia",
            "Butterfly Kids",
            "Lakki Reddy",
            "Mr Bedfort",
            "Bonbon",
            "Ruge Boogie",
            "Annie Use Your Telescope",
            "Architects Daughter",
            "Cedarville Cursive",
            "Cookie",
            "Covered By Your Grace",
            "Dancing Script",
            "Indie Flower",
            "Gloria Hallelujah",
            "Give You Glory",
            "Zeyada",
            "Yesteryear",
            "Waiting for the Sunrise",
            "The Girl Next Door",
            "Swanky and Moo Moo",
            "Shadows Into Light",
            "Reenie Beanie",
            "Over the Rainbow",
            "Montez",
            "Meddon",
            "Loved by the King",
            "La Belle Aurore",
            "Just Another Hand",
            "Engagement"
        ];
    }

}() );
