/**
 * framework/mesh.region.manager
 *
 * Keeps track of all regions
 */
define(['framework/mesh.region'], function (Region) {
    "use strict";

    var regionManager = function () {
        this.name = 'MeshRegionManager';
        this.regionMap = {};
    };

    /**
     * Show a view in a particular part of the dom and ensure that
     * all existing views in and under that region are properly
     * closed.
     *
     * @param domSelector A jquery selector such as #main
     * @param view Either a MeshView or MeshLayout
     * @param parentView A reference to the parent view if one exists
     */
    regionManager.prototype.show = function(domSelector, view, parentView) {
        var subview;

        // if no region currently exists, add one
        if(!this.regionMap[domSelector]) {
            this.regionMap[domSelector] = new Region({el:domSelector});
        }

        // display the view
        view = this.regionMap[domSelector].show(view);

        // if there is a parentView, add to the parent's subviews
        if(parentView && parentView !== view) {
            if(!parentView.subviews) {
                parentView.subviews = [];
            }

            parentView.subviews.push(view);
        }

        return view;
    };

    /**
     * Empty a region
     */
    regionManager.prototype.empty = function(domSelector) {
        var region = this.regionMap[domSelector];
        if(region && region.currentView) {
            region.currentView.close();
            this.remove(region.currentView);
        }
    },

    /**
     * Remove a view from the region map
     * @param view
     */
    regionManager.prototype.remove = function(view) {
        var domSelector = view.el,
            region = this.regionMap[domSelector];

        // remove the region from the map
        if(region && region.currentView == view) {
            delete this.regionMap[domSelector];
        }
    }

    return regionManager;
});