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

    modelCache.prototype.set = function(key, model) {
        this.modelLookup[key] = model;
    };

    modelCache.prototype.get = function(key) {
        return this.modelLookup[key];
    }

    return modelCache;
});