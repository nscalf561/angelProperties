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
    trim: true
  },
  password: {
    type: String
  },
  role: {
    type: String
  },
  previousInvestments: [String] //pointers to projects
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
