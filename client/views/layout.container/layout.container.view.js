/**
 * views/layout.container/layout.container.view
 *
 * Simple layout for testing out individual views
 */
(function () {

    define(['framework/mesh.view', 'text!views/layout.container/layout.container.template.html'],
        function (BaseView, ContainerLayoutTemplate) {

            return BaseView.extend({
                template:ContainerLayoutTemplate,
                name:'ContainerLayout'

            });
        });

})();