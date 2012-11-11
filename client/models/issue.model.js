/**
 * models/issue.model
 *
 */
define(['framework/mesh.model'], function (BaseModel) {

    return BaseModel.extend({
        name: 'IssueModel',
        baseUrl: 'https://api.github.com/repos/',
        repo: 'rails',
        owner: 'rails',
        issueNumber: 0,

        /**
         * Set the url based in the input values
         * @param options
         */
        initialize: function(options) {
            if(options.issueNumber) {
                this.issueNumber = options.issueNumber;
            }

            this.url = this.baseUrl + this.owner + '/' + this.repo + '/issues/' + this.issueNumber;
        }
    });

});
