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
  .get((req, res) => {
    res.render('home', {layout: 'index'});
  });

// Projects 
router.route('/api/projects')
  .get(projectController.entireProjectList)
  .post(projectController.createProject);

router.route('/api/projects/:id')
  .get(projectController.getProjectById)
  .put(projectController.updateProject)
  .delete(projectController.deleteProject);

// Users
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
