/**
 * views/issue.list/issue.list.view
 *
 * Show list of issues
 */
(function () {

    define(['framework/mesh.view', 'text!views/issue.list/issue.list.template.html', 'helpers/markdown.render'],
        function (BaseView, IssueListTemplate, RenderMarkdownHelper) {

            return BaseView.extend({
                template:IssueListTemplate,
                name:'IssueListView',
                helpers: {

                    /**
                     * For the summary body text, we will leave the markdown as is and
                     * @param markdown
                     * @param maxLength
                     */
                    truncateText: function(markdown, maxLength) {
                        var html, tempDiv, text, spaceIndex;

                        // render the html for the given markdown
                        html = RenderMarkdownHelper(markdown);

                        // then get just the text from the rendered html (i.e. without the tags)
                        tempDiv = document.createElement("DIV");
                        tempDiv.innerHTML = html;
                        text = tempDiv.textContent || tempDiv.innerText;

                        // if less than max length return
                        if(text.length <= maxLength) {
                            return text;
                        }

                        // for now just look for space to indicate end of word
                        // we likely want to remove punctuation, account for line returns, etc. in the future
                        spaceIndex = text.substring(maxLength - 1).indexOf(" ");
                        if(spaceIndex >= 0) {
                            text = text.substring(0, maxLength - 1 + spaceIndex) + '...';
                        }

                        return text;
                    }
                },
                events: {
                    'click .issue-frame': 'goToDetails'
                },

                /**
                 * Go to the details page for a given issue
                 * @param ev
                 */
                goToDetails: function(ev) {
                    var source = $(ev.currentTarget);
                    var issueNumberDiv = source.find('.issue-number');
                    var issueNumber = issueNumberDiv.html().substring(1);
                    thisapp.router.navigate('issue/' + issueNumber, {trigger: true});
                }
            });
        });

})();