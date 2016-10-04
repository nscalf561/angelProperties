var mongoose = require('mongoose');
var User = require('../models/user');
var Project = require('../models/project');
var config = require('../config/config.js');

mongoose.connect(config.database);

describe('Project', function() {
  describe('#save()', function() {
    it('project should save without error', function(done) {
      var project = new Project({name: 'Angel'});
      project.save(done);
    });
  });
});

