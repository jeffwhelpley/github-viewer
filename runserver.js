/**
 * This file is run in order to start the server
 */
(function() {
    var express =   require("express")
        , routes =  require("./server/routes")
        , http =    require("http")
        , path =    require("path");

    var app = express();

    app.configure(function(){
        app.set('port', process.env.PORT || 3000);
        app.set('views', __dirname + '/server/views');
        app.set('view engine', 'ejs');
        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(app.router);
        app.use(express.static(path.join(__dirname, '/server/public')));
        app.use(express.static(path.join(__dirname, '/client')));
    });

    app.configure('development', function(){
        app.use(express.errorHandler());
    });

    // just the one path for this app (everything on the client side)
    app.get('/', routes.index);

    http.createServer(app).listen(app.get('port'), function(){
        console.log("Express server listening on port " + app.get('port'));
    });
})();

