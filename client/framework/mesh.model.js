/**
 * framework/mesh.model
 *
 * Base class for all models
 */
define(['backbone'], function(Backbone) {

    return Backbone.Model.extend({
        name: 'MeshModel',

        convertToModel: function(dataType, modelType) {
            if (this.get(dataType)) {
                var map = { };
                map[dataType] = new modelType(this.get(dataType));
                this.set(map);
            }
        }

    });
});