/**
 * views/issue.pagination/issue.pagination.view
 *
 * Paging for the issues
 */
(function () {

    define(['framework/mesh.view', 'text!views/issue.pagination/issue.pagination.template.html'],
        function (BaseView, IssuePaginationTemplate) {

            return BaseView.extend({
                template:IssuePaginationTemplate,
                name:'IssuePaginationView'

            });
        });

})();