var mongoose = require('mongoose');
var User = require('../models/user');
var Project = require('../models/project');

describe('Project', function() {
  describe('#save()', function() {
    it('project should save without error', function(done) {
      var project = new Project('Angel');
      project.save(done);
    });
  });
});