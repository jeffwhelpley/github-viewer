/**
 * This helper function will return rendered HTML from markdown
 */
define(['showdown', 'showdownGit'], function(Showdown) {
    return function(markdown) {
        var converter = new Showdown.converter({ extensions: ['github'] });
        var html = converter.makeHtml(markdown);
        return html;
    }
});
