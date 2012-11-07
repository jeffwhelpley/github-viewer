/**
 * This is a container for all global values used throughout the app
 */
define([
    'backbone',
    'framework/mesh.sync',
    'framework/mesh.region.manager',
    'framework/mesh.event.aggregator',
    'framework/mesh.model.cache'
], function (Backbone, ApiSync, RegionManager, EventAggregator, ModelCache) {
    "use strict";

    return function (config) {
        var apiSync, err;

        // make sure config passed in is valid
        if (!config) {
            err = new Error("Cannot start app with invalid config.");
            err.name = "InvalidConfigError";
            throw err;
        }

        // this values will be available through the application
        this.name = "MeshApplication";
        this.regions = new RegionManager();
        this.vent = new EventAggregator();
        this.cache = new ModelCache();
        this.config = config;
        this.token = {
            user:   this.config.user,
            value:  this.config.token
        };

        // override the default way to communicate to the server
        apiSync = new ApiSync({
            apiUrl:         this.config.apiUrl,
            apiVersion:     this.config.apiVersion,
            token:          this.token
        });
        _.bindAll(apiSync);
        Backbone.sync = apiSync.sync;
    };
});