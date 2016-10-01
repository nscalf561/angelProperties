let app       = require('../server'),
    Project   = require('../models/project');

//TODO: build a callback system to propogate errors up the chain
//i.e. pass a callback, then call the callback
let projectController = {

  entireProjectList : (req, res) => {
    Project.find({}, (err, projects) => {
      if (err) {
        console.log(`Error finding all projects: ${err}`);
        return err;
      }
      res.json({projects: projects});
    });
  },

  createProject : (req, res) => {
    let newProject = new Project({
      name: req.body.name,
      description: req.body.description,
      fundraisingGoal: req.body.fundraisingGoal,
      amountRaised: req.body.amountRaised,
      usersWhoInvested: req.body.usersWhoInvested,
      owners: req.body.owners,
      location: req.body.location
    });

    newProject.save((err, newProject) => {
      if (err) {
        res.status(500).send();
        console.log(`There was an error saving the new project: ${err}`);
        return err;
      }
      res.json({project: newProject});
      console.log(`The new project was successfully saved.`);
    });
  },

  getProjectById : (req, res) => {
    Project.findOne({_id: req.params.id}, (err, project) => {
      if (err) {
        console.log(`There was an error finding the project by id: ${err}`);
        res.status(500).send();
      }
      res.json({project: project});
    });
  },

  updateProject : (req, res) => {
    Project.findOne({_id: req.params.id}, (err, project) => {
      if (err) {
        res.status(500).send();
        console.log(`There was an error finding the project to update: ${err}`);
        return err;
      }

      if (req.body.name) { project.name = req.body.name; }
      if (req.body.description) { project.description = req.body.description; }
      if (req.body.fundraisingGoal) { project.fundraisingGoal = req.body.fundraisingGoal; }

      Project.update({_id: req.params.id}, project, (err, project) => {
        if (err) {
          res.status(500).send();
          console.log(`There was an error updating the project: ${err}`);
          return err;
        }
        res.json({project: project});
      });
    });
  },

  deleteProject : (req, res) => {
    Project.remove({_id: req.params.id}, (err) => {
      if (err) {
        res.status(500).send();
        console.log('There was an error deleting the project: $(err)');
        return err;
      }

      res.json({message: "project successfuly deleted"});
    });
  }

};

module.exports = projectController;
