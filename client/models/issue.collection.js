/**
 * models/issue.collection
 *
 */
define(['backbone', 'models/issue.model'], function (Backbone, IssueModel) {

    return Backbone.Collection.extend({
        model: IssueModel,
        url: 'https://api.github.com/repos/rails/rails/issues'

    });
});
