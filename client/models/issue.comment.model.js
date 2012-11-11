/**
 * models/issue.comment.model
 *
 */
define(['framework/mesh.model'], function (BaseModel) {

    return BaseModel.extend({
        name: 'IssueCommentModel',
        baseUrl: 'https://api.github.com/repos/',
        repo: 'rails',
        owner: 'rails',
        commentId: 0,

        /**
         * Set the url based in the input values
         * @param options
         */
        initialize: function(options) {
            if(options.commentId) {
                this.commentId = options.commentId;
            }

            this.url = this.baseUrl + this.owner + '/' + this.repo + '/issues/comments/' + this.commentId;
        }

    });

});