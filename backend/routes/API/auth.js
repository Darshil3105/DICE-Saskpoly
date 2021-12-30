const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('config')
const express = require('express')
const router = express.Router()

// User model
const User = require('../../models/users.model')


router.get('/high',(req,res)=>res.send("hello world"));
router.post('/', (req, res) => {

    const { username, password, token } = req.body;

    // if(token){

    //     try {
    //         const decoded = jwt.verify(token, config.get('jwtSecret'))
    //         req.user = decoded;

    //         User.findById(req.user.id)
    //             .then(user => {
    //                 jwt.sign(
    //                     {id : user.id}, config.get('jwtSecret'), {expiresIn : 3600}, (err, token) => {
    //                         if(err) throw err;
    //                         res.json({
    //                             token,
    //                             msg : 'Profile authenticated successfully',
    //                             user : {
    //                                 id : user.id,
    //                                 name : user.name
    //                             },
    //                             success : true
    //                         })

    //                     }
    //                 )
    //             })
    //             .catch(err => {
    //                 return res.json({'msg' : 'User not found', success : false})
    //             })
    //     }

    //     catch (e) {
    //         return res.json({msg : 'Token not valid', success : false})
    //     }
    // } else {

    // Simple validation
    if(!username || !password){
        return res.json({msg : 'Please enter all fields', success : false})
    }
    else {
    // Check user
    
    User.findOne({ username })
        .then(user => {
            if(!user){
                return res.json({msg : 'User Does not exist', success : false})
            }

            // Validate password
            // bcrypt.compare(user.password, user.password)
            //     .then(isMatch => {
            //         if(!isMatch){
            //             return res.json({msg : 'Invalid Credentials', success : false})
            //         }
            if(password!=user.password)
            {
                return res.json({msg : 'Invalid Credentials', success : false})
            }
            else
            {

                    jwt.sign(
                        {_id : user._id},
                        config.get('jwtSecret'),
                        { expiresIn : 3600},
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                success : true,
                                token,
                                user : {
                                    _id : user.id,
                                    username : user.username,
                                    password:user.password,
                                    full_name:user.full_name,
                                    role:user.role,

                                }
                            })
                        }
                    )
          }  })
        }
    
})

module.exports = router;