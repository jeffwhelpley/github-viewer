/**
 * models/issue.model
 *
 */
define(['jquery', 'backbone'], function ($, Backbone) {

    return Backbone.Model.extend({
        url: 'https://api.github.com/repos/rails/rails/issues/' + this.id,
        parse: function(response) {
            return response.data;
        }
    });

});
