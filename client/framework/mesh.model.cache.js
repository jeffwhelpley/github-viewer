/**
 * framework/mesh.model.cache
 *
 * Used to hold models that can be shared among views
 */
define(function () {
    "use strict";

    var modelCache = function () {
        this.name = 'MeshModelCache';
        this.modelLookup = {};
    };

    modelCache.prototype.addModel = function(model) {
        this.modelLookup[model.name] = model;
    };

    return modelCache;
});