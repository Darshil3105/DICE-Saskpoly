const router = require('express').Router();
let NewUser = require('../models/users.model');

router.route('/').get((req, res) => {
    NewUser.find()
        .then(newusers => res.json(newusers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const full_name = req.body.full_name;
    const role = req.body.role;
    const contact_details = Number(req.body.contact_details);
    const username = req.body.username;
    const password = req.body.password;

    //const date = Date.parse(req.body.date);

    const newUser = new NewUser({
        full_name,
        role,
        contact_details,
        username,
        password,
    });

    newUser.save()
        .then(() => res.json('New User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    NewUser.findById(req.params.id)
        .then(profileadmin => res.json(profileadmin))
        .catch(err => res.status(400).json('Error: ' + err));
});


/*
router.route('/:id').get((req, res) => {
    NewUser.findById(req.params.id)
        .then(newuser => res.json(newuser))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    NewUser.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    NewUser.findById(req.params.id)
        .then(newuser => {
            newuser.username = req.body.username;
            newuser.name = req.body.name;
            newuser.password = req.body.password;
            newuser.role = req.body.role;
            newuser.contact = Number(req.body.contact);
            //newuser.date = Date.parse(req.body.date);

            newuser.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});
*/

module.exports = router;