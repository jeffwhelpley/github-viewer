/**
 * Execute all test specs
 */
(function () {
    require.config({
        paths:{
            // many people have the google jquery file cached, so try to use that
            jquery:['http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min', '../app/lib/jquery'],
            underscore:'../libs/underscore',
            backbone:'../libs/backbone',
            text:'../libs/require.text',
            issueModel: '../models/issue.model'
        },
        // ensure libraries loaded in the right order
        shim:{
            underscore:{ exports:'_' },
            jquery:{ exports:'$' },
            backbone:{ exports:'Backbone', deps:['jquery', 'underscore'] }
        },
        deps:['jquery', 'underscore', 'backbone']
    });

    require(['jquery', 'lib/jasmine-1.2.0/jasmine', 'lib/jasmine-1.2.0/jasmine-html', 'spec/issue.model.spec'], function ($) {
        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;

        var htmlReporter = new jasmine.HtmlReporter();

        jasmineEnv.addReporter(htmlReporter);

        jasmineEnv.specFilter = function (spec) {
            return htmlReporter.specFilter(spec);
        };

        $(function() {
            jasmineEnv.execute();
        });
    });
})();
