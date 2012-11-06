/**
 * models/issue.model
 *
 */
define(['jquery', 'backbone'], function ($, Backbone) {

    return Backbone.Model.extend({

        /**
         * This is a read-only app, so only have to do the GET
         */
        sync: function(method, model, options) {
            $.ajax({
                url: 'https://api.github.com/repos/' + options.owner + '/' + options.repo + '/issues/' + options.number,
                type: 'GET',
                crossDomain: true,

                // successful response so set returned data and do callbacks
                success: function (response) {
                    if (typeof response === 'string') {
                        response = $.parseJSON(response);
                    }

                    model.set(response);

                    if(options.success) {
                        options.success();
                    }
                },

                // if error handler call it, else send the user to the error page
                error: function (response, textStatus, errorThrown) {

                    if (options.error) {
                        options.error(response);
                    }
                    else {
                        var err = new Error("Server returned an error: " + response);
                        err.name = "ServerApiError";
                        throw err;
                    }
                }
            });
        }

    });

});
