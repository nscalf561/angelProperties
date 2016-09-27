let mongoose   = require('mongoose'),
    Schema     = mongoose.Schema;

let ProjectSchema = new Schema ({
  name: String,
  description: String,
  fundraisingGoal: Number,
  amountRaised: Number,
  usersWhoInvested: [String], // Will be pointers to users
  owners: [String], // arr of pointers to users
  location: { //TODO how do we store location from google maps?
    lat: Number,
    lon: Number
  },
  createdAt: { type: Date, default: new Date() }
});

let Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
