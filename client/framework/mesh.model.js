/**
 * framework/mesh.model
 *
 * Base class for all models
 */
define(['backbone'], function(Backbone) {

    return Backbone.Model.extend({
        name: 'MeshModel',

        /**
         * This function is used if we have nested models
         * @param dataType
         * @param modelType
         */
        convertToModel: function(dataType, modelType) {
            if (this.get(dataType)) {
                var map = { };
                map[dataType] = new modelType(this.get(dataType));
                this.set(map);
            }
        },

        /**
         * Parse the response from the ajax call
         * @param response
         * @return data
         */
        parse: function(response) {
            return response.data;
        }

    });
});