/**
 * models/issue.collection
 *
 */
define(['framework/mesh.collection', 'models/issue.model'], function (BaseCollection, IssueModel) {

    return BaseCollection.extend({
        model: IssueModel,
        name: 'IssueCollection',
        baseUrl: 'https://api.github.com/repos/',
        repo: 'rails',
        owner: 'rails',
        currentPage: 1,
        resultsPerPage: 25,

        /**
         * Set the url based in the input values
         * @param options
         */
        setOptions: function(options) {
            if(options.pageNumber) {
                this.currentPage = options.pageNumber;
            }
            if(options.resultsPerPage) {
                this.resultsPerPage = options.resultsPerPage;
            }

            this.url = this.baseUrl + this.owner + '/' + this.repo +
                '/issues?page=' + this.currentPage + '&per_page=' + this.resultsPerPage;
        }

    });
});
