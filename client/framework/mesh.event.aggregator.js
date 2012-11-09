/**
 * framework/mesh.event.aggregator
 *
 * All events not on a model or the DOM should be through this
 */
define(['backbone', 'evtAggregator'], function (Backbone) {

    return Backbone.Wreqr.EventAggregator.extend({
        name: 'MeshEventAggregator'

    });
});