/**
 * appinit
 *
 * This is the entry point into the application
 */
(function (window) {

    // pull in all the required libraries
    require.config({
        paths:{
            // many people have the google jquery file cached, so try to use that
            jquery:         ['http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min', 'lib/jquery'],
            underscore:     'libs/underscore',
            backbone:       'libs/backbone',
            text:           'libs/require.text'
        },
        // ensure libraries loaded in the right order
        shim:{
            underscore: { exports: '_' },
            jquery:     { exports: '$' },
            backbone:   { exports: 'Backbone', deps:['jquery', 'underscore'] }
        },
        deps:['jquery', 'underscore', 'backbone']
    });

    // fire up the app
    require(['backbone', 'framework/mesh.application', 'routers/main.router', 'config/main.config'],
        function (Backbone, App, MainRouter, config) {
            window.thisapp = new App(config);
            thisapp.router = new MainRouter();
            Backbone.history.start();
        });

})(window);