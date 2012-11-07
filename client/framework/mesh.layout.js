/**
 * framework/mesh.layout
 *
 * This is the base class for all layouts
 */
define(['framework/mesh.view'], function(MeshView) {

    return MeshView.extend({
        name: 'MeshLayout',
        isLayout: true

    });
});