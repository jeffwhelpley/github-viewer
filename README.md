github-viewer
=============

A simple Backbone.js app for navigating through GitHub issues on a particular repo.

## Prerequisites ##

1. Node.js
2. Git Bash

## Instructions to Run Code ##

1. Run the following command to clone the repo locally from your Git Bash shell:
    git clone https://github.com/jeffwhelpley/github-viewer.git
2. CD to the root directory for the github-viewer
3. Run the following command:
    npm install
4. Run the server with the following command:
    node runserver
5. Open up your browser to http://localhost:3000

## Purpose of this Project ##

This project is a way for me to try out some new frameworks and techniques. There is no one perfect way to do things
in Backbone.js. In fact, often there are many different good solutions that can be used to solve the same problem.
So, I am going to try out various pieces of other frameworks in addition to some new stuff I come up with in order
to find my own preferred framework for front end applications.

## Influencing Frameworks ##

* [Backbone Marionette](https://github.com/marionettejs/backbone.marionette) - I have not directly integrated any of
Derick Bailey's framework, but I have adapted some of his concepts including Regions and Event Binding. Also,
will be including some of Event Aggregation code in the future. I have also read many of
[Derick's blogs](http://lostechies.com/derickbailey/) which continue to provide a lot of influence into my work.
* [Backbone Fundamentals](http://addyosmani.github.com/backbone-fundamentals/) - Addy Osmani's open source book helped
me pick up many of the concepts of Backbone.js and has some great example code that I am sure has found its way into
various parts of my code.
* [Backbone Boilerplate](https://github.com/tbranyen/backbone-boilerplate) - Although I didn't use the bbb module system,
it did get me thinking about how I wanted to modularize my code. I ended up going in a slightly different direction,
but I think Tim Branyen's work here can be extremely useful. Funny enough, as I was writing up the documentation I saw that Tim
has his own [GitHub Viewer](https://github.com/tbranyen/github-viewer) but other than the name it doesn't have much
in common with this project. I also reviewed but ultimately did not use Tim's
[Backbone LayoutManager](https://github.com/tbranyen/backbone.layoutmanager) and
[Backbone RouteManager](https://github.com/tbranyen/backbone.routemanager).

## Libraries Utilized ##

Besides the standard Backbone libraries (i.e. jQuery, Underscore, Backbone), this project also uses:

* [Showdown](https://github.com/coreyti/showdown) - Helps render some of the GitHub comments and text.
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/) - For basic styling
* [Grunt](http://gruntjs.com/) - Build tool for minifying and compiling CSS and JS

## What Went Well ##

* Subview Architecture - Ever since I heard [Jen Simmons](http://5by5.tv/webahead) talk about the idea of building and
testing page components by themselves and then fitting them into various layouts, I have been interested in finding
ways to create a loosely coupled component architecture. What I have here is not perfect yet, but I was able to
build this app by starting at the smallest subview and building up rather than the way around (which most people are
used to doing).  To see what I am talking about, start the node server (i.e. node runserver) and go to
http://localhost:3000/view/issue.list. Replace issue.list with any non-layout folder name under /client/views.
* Helpers - This came from Derick Bailey's idea for
[View Helpers](http://lostechies.com/derickbailey/2012/04/26/view-helpers-for-underscore-templates/) and I think it
turned out well.

## What Needs Improvement ##

* Routing - This is an extremely simple app, but the one router become bloated really quickly. Part of this was a
result of me trying to keep the views light and simple, but this definitely needs some work. In other apps, I have
liked Tim Brayen's RouteManager as I mentioned earlier, but I will need to play with this more.
* Region Management - I like the idea of region management and my implementation is pretty good, but it still needs a
little more work as there is a circular dependency among Region Manager, Region and View when closing a nested view.
* Model Caching - I think this is needed, but I sort of just threw in there a really simple implementation for this
project. I will have to look around or develop some sort of LRU algorithm in the future.

## Other Plans for Future ##

* Event Aggregation - This app doesn't have subviews talking to each other but I plan on implementing something like
[Derick Bailey's Wreqr](https://github.com/marionettejs/backbone.wreqr)
* OAuth and Other Repos - To make things simple, I just used the rails repo for this app to start, but I want to try
and get this more interactive in the future.
* All Issues - I couldn't for the life of me find where in the GitHub API you can find the total count of issues for
a given repo.  I tried to pull as many as possible with a per_page value of 3000, but it looks like GitHub only
sends back a max of 100 results with any call.



