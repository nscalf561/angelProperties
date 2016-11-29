var mongoose 		= require('mongoose'),
	User			= require('../models/user'),
	Project 		= require('../models/project');

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
var userList = [
	{
		name: "Jess",
		email: "jess@gmail.com",
		password: "GiveMeCheeseOrGiveMeDeath",
		role: "Investor",
		about: {
			picture: "This will need to be a picture",
			bio: "Here is a string",
			markets: ["This will likely change", "Why am i a string?"],
			education: [{
				schoolName: "Berkeley",
				degree: "Vagina Doctor",
				graduationYear: "1642"
			}]
		},
		entrepreneurStatus: 'False',
	  investorStatus: 'True',
	  //if investor status is true
	  advisorToCompanies: [],
	  previousInvestments: [],
	  lookingForFundingSupport: 'True'
	}
];

//TODO create seed data for projects

let projectList = [];


// userList.forEach((user) => {
	// let newUser = new User(user);
	// newUser.save((err) => {
	// 	if (err) {
	// 		console.log(`Error creating user seed: ${err}`);
	// 		process.exit();
	// 		mongoose.connection.close();
	// 	}
	// });
// });

User.create(userList, (err, users) => {
	if (err) {
		console.log(`Error creating user seed: ${err}`);
		process.exit();
		mongoose.connection.close();
	}
	console.log(users);
});





