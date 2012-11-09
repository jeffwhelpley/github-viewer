/**
 * models/issue.comment.collection
 *
 */
define(['backbone', 'models/issue.comment.model'], function (Backbone, IssueCommentModel) {

    return Backbone.Collection.extend({
        model: IssueCommentModel,
        url: 'https://api.github.com/repos/rails/rails/issues/' + this.issueId + 'comments',
        parse: function(response) {
            return response.data;
        }
    });
});
