/**
 * framework/mesh.region.manager
 *
 * Keeps track of all regions
 */
define(['framework/mesh.region'], function (Region) {
    "use strict";

    var regionManager = function () {
        this.name = 'MeshRegionManager';
        this.regions = {};
    };

    /**
     * Show a view in a particular part of the dom and ensure that
     * all existing views in and under that region are properly
     * closed.
     *
     * @param domSelector A jquery selector such as #main
     * @param view Either a MeshView or MeshLayout
     */
    regionManager.prototype.show = function(domSelector, view) {
        var subView;

        // if no region currently exists, add one
        if(!this.regions[domSelector]) {
            this.regions[domSelector] = new Region({el:domSelector});
        }

        // if a layout is being displayed, we need to close all other regions that are under that layout
        if(view.isLayout) {
            for(var domKey in this.regions) {

                // skip the region that is currently being rendered
                if(domKey == domSelector) continue;

                subView =  this.regions[domKey].currentView;

                // use jquery to determine if subView nested under view
                if($(view.el + ' ' + subView.el).length) {
                    this.regions[domKey].closeCurrentView();
                    delete this.regions[domKey];
                }
            }
        }

        // finally display the view
        this.regions[domSelector].show(view);
    };

    return regionManager;
});