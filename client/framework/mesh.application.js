/**
 * This is a container for all global values used throughout the app
 */
define([
    'backbone',
    'framework/mesh.region.manager',
    'framework/mesh.event.aggregator',
    'framework/mesh.model.cache'
], function (Backbone, RegionManager, EventAggregator, ModelCache) {
    "use strict";

    return function (config) {
        var err;

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

        // NOTE: router should be saved to this object when the application is initialized
    };
});