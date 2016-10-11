let mongoose  = require('mongoose'),
    bcrypt    = require('bcrypt'),
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

UserSchema.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
        bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }
        user.password = hash;
          next();
        });
    });
  } else {
      return next();
    }
});
 
UserSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
      cb(null, isMatch);
  });
};

var User = mongoose.model('User', UserSchema);
module.exports = User;
