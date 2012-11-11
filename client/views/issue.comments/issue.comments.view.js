/**
 * views/issue.comments/issue.comments.view
 *
 * Show the comments for one issue
 */
(function () {

    define(['framework/mesh.view', 'text!views/issue.comments/issue.comments.template.html', 'helpers/markdown.render'],
        function (BaseView, IssueCommentsTemplate, RenderMarkdownHelper) {

            return BaseView.extend({
                template:IssueCommentsTemplate,
                name:'IssueCommentsView',
                helpers: {
                    formatDate: function(dateVal) {
                        var dt = new Date(dateVal);
                        return dt.getFullYear() + "-" + dt.getMonth() + "-" + dt.getDate();
                    },
                    transformComments: function(markdown) {
                        var html = RenderMarkdownHelper(markdown);
                        return html.replace(new RegExp('@([a-zA-Z0-9]*)', 'gi'), '<a href="https://github.com/$1">@$1</a>')
                    }
                }
            });
        });

})();