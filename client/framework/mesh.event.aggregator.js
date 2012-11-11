/**
 * framework/mesh.event.aggregator
 *
 * All events not on a model or the DOM should be through this.
 *
 * NOTE: this is not currently being used in this project yet
 */
define(['backbone', 'evtAggregator'], function (Backbone) {

    return Backbone.Wreqr.EventAggregator.extend({
        name: 'MeshEventAggregator'

    });
});