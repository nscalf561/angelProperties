let express             = require('express'),
    router              = express.Router(),
    path                = require('path'),
    apiController       = require('../controllers/apiController'),
    userController      = require('../controllers/userController');

router.route('/api')
  .get(apiController.index);

router.route('/')
  .get((req, res) => {
    res.render('home', {layout: 'index'});
  });

router.route('/api/users')
  .get(userController.index)
  .post(userController.createUser)
;

router.route('/api/users/:id')
  .get(userController.findUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUserById)
;

module.exports = router;
