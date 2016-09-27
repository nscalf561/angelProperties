let mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

let UserSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true //Sanitizes input of whitespace
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String
  },
  picture: String, //TODO how do you store pictures
  bio: String,
  investorStatus: Boolean,
  builderStatus: Boolean,
  previousInvestments: [String] //pointers to projects
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
