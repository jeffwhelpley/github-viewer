/**
 * framework/mesh.collection
 *
 * Base class for all collections
 */
define(['backbone'], function (Backbone) {

    return Backbone.Collection.extend({
        name: 'MeshCollection',

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