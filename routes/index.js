var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var protein=require('../app/models/post');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/search/:keyword',function (request,response,next) {
    var keyword = request.params.keyword;
    protein
        .find({'gene':String(keyword)})
        .exec(function (error, pro) {
            if (error)
                response.render('error.ejs');
            response.render('result.ejs',{
                post:pro,
            });
        })
});

module.exports = router;