var mongoose 		= require('mongoose'),
	User			= mongoose.model('User'),
	Project 		= mongoose.model('Project');

mongoose.connect('mongodb://localhost/angelProperties');


//clears existing users and projects from database

User.remove({}, (err,users) => {
	if (err) {
		console.log('error removing users: $(err)');
		process.exit();
		mongoose.connection.close();
	}
		console.log('users deleted');
});

Project.remove({}, (err, projects) => {
	if (err) {
		console.log('error removing projects: $(err)');
		process.exit();
		mongoose.connection.close();
	}
		console.log('projects deleted');
});


//TODO create seed data for users
var userList = [];

//TODO create seed data for projects

var projectList = [];
