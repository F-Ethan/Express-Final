var express = require('express');
var router = express.Router();
var models = require('../models'); 
const authService = require('../services/auth'); 

router.get('/', function(req, res, next) {
    res.render('createPosts');
  });

router.post('/', function(req, res, next) {
    let token = req.cookies.jwt;
    
    if (token) {
        authService.verifyUser(token)
        .then(user => {
            if (user) {
                models.Posts
                .findOrCreate({
                  where: {
                    PostTitle: req.body.title,
                    PostBody: req.body.postBody,
                    UserId: user.UserId
                  }
                })
                .spread(function (result, created) {
                  if (created) {
                    res.redirect('/users/login');
                  } else {
                    res.send('This user already exists');
                  }
                });
            } else {
            res.status(401);
            res.send('Invalid authentication token');
            }
        });
    } else {
        res.redirect('/users/login');
    }
    // console.log(models.Posts.findAll())
    
});


module.exports = router;