/**
 * views/layout.site/layout.site.view
 *
 * The primary layout for the site that contains the header and footer
 */
(function () {

    define(['framework/mesh.view', 'text!views/layout.site/layout.site.template.html'],
        function (BaseView, SiteLayoutTemplate) {

            return BaseView.extend({
                template:SiteLayoutTemplate,
                name:'SiteLayout'

            });
        });

})();