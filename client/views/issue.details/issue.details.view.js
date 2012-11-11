/**
 * views/issue.details/issue.details.view
 *
 * Show the details for one issue
 */
(function () {

    define(['framework/mesh.view', 'text!views/issue.details/issue.details.template.html', 'helpers/markdown.render'],
        function (BaseView, IssueDetailsTemplate, RenderMarkdownHelper) {

            return BaseView.extend({
                template:IssueDetailsTemplate,
                name:'IssueDetailsView',
                helpers: {
                    renderMarkdown: RenderMarkdownHelper
                },
                events: {
                    'click #back-btn': 'goBack'
                },

                /**
                 * Event handler for when user clicks on the BACK button
                 */
                goBack: function() {
                    history.go(-1);
                }
            });
        });

})();