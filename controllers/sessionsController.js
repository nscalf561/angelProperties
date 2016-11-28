var app 		  = require('../server'),
	User 	  = require('../models/user'),
	passport  = require('passport'),
	jwt	      = require('jwt-simple'),
	config  = require('../config/config');

var sessionsController = {

	signup : function (req, res) {
		if (!req.body.name || !req.body.password || !req.body.email) {
    	res.json({success: false, msg: 'Please pass name, email, and password.'});
  	} else {
    		var newUser = new User({
      		name: req.body.name,
          	email: req.body.email,
      		password: req.body.password,
    		});
    	// save the user
    		newUser.save(function(err) {
      		if (err) {
        		return res.json({success: false, msg: 'Email has been taken.'});
      		}
      		res.json({success: true, msg: 'Successful created new user.'});
    		});
  		}
	},

	authenticate: function (req, res) {
		User.findOne({
    	email: req.body.email
  	}, 
  	function(err, user) {
    	if (err) throw err;
 
    	if (!user) {
      	res.send({success: false, msg: 'Authentication failed. User not found.'});
    	} else {
      		// check if password matches
      		user.comparePassword(req.body.password, function (err, isMatch) {
        		if (isMatch && !err) {
          		// if user is found and password is right create a token
          		var token = jwt.encode(user, config.secret);
          		// return the information including token as JSON
          		res.json({success: true, token: 'JWT ' + token});
        		} else {
          			res.send({success: false, msg: 'Authentication failed. Wrong password.'});
        			}
      		});
    		}
  	});
	},
};

module.exports = sessionsController;		