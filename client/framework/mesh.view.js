/**
 * framework/mesh.view
 *
 * This is the base class for all views
 */
define(['underscore', 'backbone'], function(_, Backbone) {

    return Backbone.View.extend({
        name: 'MeshView',

        /**
         * The default rendering process for most views. This can be overriden
         * if other behavior is needed.
         */
        render: function() {
            if (!this.template) {
                var err = new Error("Cannot render view without a template set.");
                err.name = "NoTemplateSet";
                throw err;
            }

            // execute any code before rendering html
            if(this.preRender) {
                this.preRender();
            }

            // set default if doesn't exist
            if(!this.helpers) {
                this.helpers = {};
            }

            // display the template with the appropriate view
            this.$el.html(_.template(this.template, {data: this.model, helper: this.helpers}));

            // if method exists in view, execute after rendering html
            if(this.onRender) {
                this.onRender();
            }

            this.undelegateEvents();
            this.delegateEvents();
        },

        /**
         * Determine if the input view is the same as this view
         * @param view
         */
        equals: function(view) {
            return (this.name === view.name && this.model === view.model);
        },

        /**
         * Used whenever a view binds to a model event
         * @param model
         * @param ev
         * @param callback
         */
        bindTo: function (model, ev, callback) {
            if(!this.bindings) {
                this.bindings = [];
            }

            model.bind(ev, callback, this);
            this.bindings.push({ model: model, ev: ev, callback: callback });
        },

        /**
         * Called to close a view and all subviews
         */
        close: function () {

            if(this.onClose) {
                this.onClose();
            }

            // first dispose all the subviews
            if(this.subviews) {
                _.each(this.subviews, function(subview) {
                    thisapp.regions.remove(subview);
                    subview.close();
                });
            }

            // unbind all model events
            this.unbindFromAll();

            // unbind all DOM event listeners
            this.unbind();

            // blank out the html within the element
            this.$el.html('');
        },

        /**
         * Loop through bindings and remove them
         */
        unbindFromAll: function () {
            _.each(this.bindings, function (binding) {
                binding.model.unbind(binding.ev, binding.callback);
            });
            this.bindings = [];
        }
    });
});