const router = require('express').Router();
let ProfileManage = require('../models/users.model');

router.route('/').get((req, res) => {
    ProfileManage.find()
        .then(profileadmin => res.json(profileadmin))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:role').get((req, res) => {
    ProfileManage.find({role: req.params.role})
        .then(profileadmin => res.json(profileadmin))
        .catch(err => res.status(400).json('Error: ' + err));
});





router.route('/update/:id').post((req, res) => {
    ProfileManage.findById(req.params.id)
        .then(profileadmin => {


            profileadmin.password = req.body.password;
            profileadmin.about_me = req.body.about_me;
            profileadmin.hobbies = req.body.hobbies;
            profileadmin.contact_details = Number(req.body.contact_details);



            profileadmin.save()
                .then(() => res.json('Data updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;