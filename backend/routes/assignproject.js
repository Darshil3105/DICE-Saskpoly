const router = require('express').Router();
let AssignProject = require('../models/users.model');

router.route('/').get((req, res) => {
    AssignProject.find()
        .then(profileadmin => res.json(profileadmin))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const project = req.body.project;
    const researcher = req.body.researcher;
    const technician = req.body.technician;
    const permtotech = req.body.permissiontotech;
    const student = req.body.student;
    const permtostd = req.body.permissiontostd;
    const team_members = req.body.team_members;


    const assignproject = new AssignProject({

        project,
        researcher,
        technician,
        permtotech,
        student,
        permtostd,
        team_members,
    });

    assignproject.save()
        .then(() => res.json('Project Assigned'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;