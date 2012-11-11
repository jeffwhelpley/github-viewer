/**
 * framework/region
 *
 * This class represents a region on a page (i.e. one DOM element). A region can be occupied by at most
 * one view at any time (with other subviews, but no other siblings within the region).
 *
 * This class was inspired by Derrick Bailey's Region object that is part of Backbone.Marionette
 *      https://github.com/marionettejs/backbone.marionette
 */
define(function () {
    "use strict";

    // constructor will set the options which mostly consist of the
    // element in the DOM that this region covers
    var region = function (options) {
        this.name = "MeshRegion";

        // set the DOM el in the object
        this.options = options || {};
        var el = this.options.el;
        delete this.options.el;
        if (el) {
            this.el = el;
        }

        // if for some reason the el doesn't exist, throw an error
        if (!this.el) {
            var err = new Error("An 'el' must be specified for a region.");
            err.name = "NoElError";
            throw err;
        }

        // if currentView passed in, display it right away
        if (this.options.view) {
            this.show(this.options.view);
        }
    };

    // close the current view
    region.prototype.closeCurrentView = function () {
        if (!this.currentView) {
            return;
        }
        if (this.currentView.close) {
            this.currentView.close();
        }
        delete this.currentView;
    };

    // function to close an existing view and show a new view
    region.prototype.show = function (newView) {

        // if the new view is exactly the same as the existing view, don't do anything
        if(this.currentView && this.currentView.equals(newView)) {
            return this.currentView;
        }

        this.closeCurrentView();

        newView.el = this.el;
        newView.$el = $(this.el);
        newView.render();

        if (newView.onShow) {
            newView.onShow();
        }

        return this.currentView = newView;
    };

    // refresh the current view if it exists
    region.prototype.refresh = function () {
        if (this.currentView) {
            this.currentView.render();
        }
    };

    return region;

});