/**
 * This route simply serves up the index.ejs which is an empty static page
 *
 * @param req
 * @param res
 */
exports.index = function(req, res){
    res.render('index');
};