/**
 * This route simply serves up the index.ejs which is largely static
 *
 * @param req
 * @param res
 */
exports.index = function(req, res){
    res.render('index');
};