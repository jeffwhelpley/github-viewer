/**
 * models/issue.comment.collection
 *
 */
define(['framework/mesh.collection', 'models/issue.comment.model'], function (BaseCollection, IssueCommentModel) {

    return BaseCollection.extend({
        model: IssueCommentModel,
        name: 'IssueCommentCollection',
        baseUrl: 'https://api.github.com/repos/',
        repo: 'rails',
        owner: 'rails',
        issueNumber: 0,

        /**
         * Set the issue number and generate the URL
         * @param issueNumber
         */
        setIssueNumber: function(issueNumber) {
            if(issueNumber) {
                this.issueNumber = issueNumber;
            }

            this.url = this.baseUrl + this.owner + '/' + this.repo +
                '/issues/' + this.issueNumber + '/comments?page=1&per_page=2000';
        }
    });
});
