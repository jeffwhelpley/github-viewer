/**
 * routers/main.router.router
 *
 * For this simple app, we just have one router with a couple views that all are displayed in the
 * main area. Even so, this router has become pretty bloated, so need to refactor with next iteration.
 */
define([
    'backbone',
    'views/layout.container/layout.container.view',
    'views/layout.site/layout.site.view',
    'views/issue.comments/issue.comments.view',
    'views/issue.details/issue.details.view',
    'views/issue.list/issue.list.view',
    'views/issue.pagination/issue.pagination.view',
    'models/issue.collection',
    'models/issue.model',
    'models/issue.comment.collection'
], function (Backbone, ContainerLayout, SiteLayout,
             IssueCommentsView, IssueDetailsView, IssueListView,
             IssuePaginationView, IssueCollection, IssueModel, IssueCommentCollection) {

    return Backbone.Router.extend({
        name: 'MainRouter',

        routes:{
            '':                     'issueList',        // show list of issues as default page
            'issues/:pageNumber':   'issueList',        // show a particular page of issue list
            'issue/:issueNumber':   'issueDetails',     // show the details for one issue
            'view/:viewName':       'viewTester'        // this route helps during development on one individual view
        },

        /**
         * Show a list of up to 25 issues in a list
         * @param pageNumber the page number to display
         */
        issueList: function(pageNumber) {

            var siteLayout, allIssues, issueCollection, paginationModel, i, page, nbrPages;
            siteLayout = thisapp.regions.show('body', new SiteLayout());

            // set page to 1 by default
            if(!pageNumber || pageNumber === '0') {
                pageNumber = '1';
            }
            issueCollection = new IssueCollection();
            issueCollection.setOptions({pageNumber: pageNumber});
            paginationModel = new Backbone.Model({numberOfPages: pageNumber, currentPage: pageNumber});

            // first check to see if we have the full set of issue data in cache
            allIssues = thisapp.cache.get('allIssues');
            if(allIssues) {

                // we will get a subset of issues based on the page number
                page = parseInt(pageNumber) - 1;
                for(i = page; i < page + 25 && i < allIssues.length; i++) {
                    issueCollection.push(allIssues.at(i));
                }

                nbrPages = Math.ceil(allIssues.length / 25);
                paginationModel.set('numberOfPages', nbrPages);
                thisapp.regions.show('#main1', new IssuePaginationView({model:paginationModel}));
                thisapp.regions.show('#main2', new IssueListView({model:issueCollection}));
                return;
            }

            // if we get here is means that we don't have anything in cache and need to pull from the server
            issueCollection.fetch({
                success: function(collection, response) {
                    collection.add(response);
                    thisapp.regions.show('#main1', new IssuePaginationView({model:paginationModel}));
                    thisapp.regions.show('#main2', new IssueListView({model:collection}));
                }
            });

            // else when we get here, we will want to async pull all issues into memory for later pagination
            allIssues = new IssueCollection();
            allIssues.setOptions({pageNumber: 1, resultsPerPage: 3000});
            allIssues.fetch({
                success: function(collection, response) {
                    collection.add(response);

                    nbrPages = Math.ceil(allIssues.length / 25);
                    paginationModel = new Backbone.Model({numberOfPages: nbrPages, currentPage: pageNumber});
                    thisapp.regions.show('#main1', new IssuePaginationView({model:paginationModel}));
                    thisapp.cache.set('allIssues', collection); // don't bother redisplaying because already have the issues
                }
            });
        },

        /**
         * Show the details for a particular issue
         * @param issueNumber The identifier number for the issue
         */
        issueDetails: function(issueNumber) {
            var siteLayout, allIssues, i, issueModel, issueCommentCollection;

            siteLayout = thisapp.regions.show('body', new SiteLayout());
            allIssues = thisapp.cache.get('allIssues');
            if(allIssues) {
                for(i = 0; i < allIssues.length; i++) {
                    if(allIssues.at(i).get('number') == issueNumber) {
                        issueModel = allIssues.at(i);
                        thisapp.regions.show('#main1', new IssueDetailsView({model:issueModel}));
                        thisapp.regions.empty('#main2');
                    }
                }
            }
            else {
                issueModel = new IssueModel({issueNumber:issueNumber});
                issueModel.fetch({
                    success: function(model, response) {
                        model.set(response);
                        thisapp.regions.show('#main1', new IssueDetailsView({model:model}));
                    }
                });
            }

            // show the comments after the fact
            issueCommentCollection = new IssueCommentCollection();
            issueCommentCollection.setIssueNumber(issueNumber);
            issueCommentCollection.fetch({
                success: function(collection, response) {
                    collection.add(response);
                    thisapp.regions.show('#main2', new IssueCommentsView({model:collection}));
                }
            })
        },

        /**
         * This route us used to test out one individual view
         * @param viewName
         */
        viewTester: function(viewName) {
            var basePath, viewPath, modelPath, container;

            // show the container layout that will hold the view
            container = thisapp.regions.show('body', new ContainerLayout());

            // get the paths to the target view and model to be displayed
            basePath = 'views/' + viewName + '/' + viewName + '.';
            viewPath = basePath + 'view';
            modelPath = basePath + 'data';

            // pull in view and model resources and display them in the container
            require([viewPath, modelPath], function(TargetView, TestData) {
                var view = new TargetView({model:TestData});
                thisapp.regions.show('#view', view, container);
            });
        }
    });

});