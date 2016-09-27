let express             = require('express'),
    router              = express.Router(),
    path                = require('path'),
    apiController       = require('../controllers/apiController'),
    userController      = require('../controllers/userController');

router.route('/api')
  .get(apiController.index);

router.route('/')
  .get(function (req, res ) {
    res.render('home', {layout: 'index'});
  });

module.exports = router;
