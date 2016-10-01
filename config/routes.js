let express             = require('express'),
    router              = express.Router(),
    path                = require('path'),
    apiController       = require('../controllers/apiController'),
    userController      = require('../controllers/userController'),
    projectController	= require('../controllers/projectController'),
    mongoose			= require('mongoose'),
    User				= mongoose.model('User'),
    Project 			= mongoose.model('Project');

router.route('/api')
  .get(apiController.index);

router.route('/')
  .get(function (req, res ) {
    res.render('home', {layout: 'index'});
  });

// Register User
// router.route('/api/signup')
//   .post(sessionsController.signup);

// router.route('/api/authenticate')
//   .post(sessionsController.authenticate);

// Users (TODO: functions need to match userController)
// router.route('/api/users')
//   .get(userController.index);

// router.route('/api/users/:id')
//   .get(userController.showUser)
//   .put(userController.updateUser)
//   .delete(userController.deleteUser);

// Projects 
router.route('/api/projects')
  .get(projectController.entireProjectList)
  .post(projectController.createProject);

router.route('/api/projects/:id')
  .get(projectController.getProjectById)
  .put(projectController.updateProject)
  .delete(projectController.deleteProject);


module.exports = router;
