const router = require('express').Router();
let Projects = require('../models/projects.model');

router.route('/').get((req, res) => {
    Projects.find()
        .then(sampleprojects => res.json(sampleprojects))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Projects.findById(req.params.id)
        .then(sampleprojects => res.json(sampleprojects))
        .catch(err => res.status(400).json('Error: ' + err));
});

/*
router.route('/add/:id').post((req, res) => {
    Projects.findById(req.params.id)
        .then(projects => {

            //const project_name = req.body.project_name;
            //const project_description = req.body.project_description;
            //const clients = req.body.clients;
            const team_members = req.body.team_members;


            const project = new Projects({

              //  project_name,
                //project_description,
                //clients,
                team_members,
            });

            project.save()
                .then(() => res.json('Project Added'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
.catch(err => res.status(400).json('Error: ' + err));
});
*/

router.route('/update/:id').post((req, res) => {
    Projects.findById(req.params.id)
        .then(projects => {


            projects.team_members = req.body.team_members;



            projects.save()
                .then(() => res.json('Project Assigned!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});







module.exports = router;