/**
 * views/issue.pagination/issue.pagination.data
 *
 */
define(['backbone'], function (Backbone) {
    "use strict";

    return new Backbone.Model({ numberOfPages: 10, currentPage: 1 });

});
