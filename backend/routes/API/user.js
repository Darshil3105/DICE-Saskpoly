const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('config')
const express = require('express')
const router = express.Router()

// User model
const User = require('../../models/users.model')

router.post('/', (req, res) => {

    const { username, password } = req.body;

    if(!username  || !password){
        res.json({success : false, msg : 'Please enter all the data'})
    }

    User
      .findOne({ username })
      .then(user => {
         if(user){
            return res.json({success : false, msg : 'User already exits'})
         }

         const newUser = new User({
             username, password
         })

         if(newUser.password==password)
         {
                newUser.save()
                       .then(user => {
                           jwt.sign(
                               {id : user.id},
                               config.get('jwtSecret'),
                               { expiresIn : 3600 },
                               (err, token) => {
                                if(err) throw err;
                                res.json({
                                       success :true,
                                       msg : "Profile Created",
                                       token,
                                       user : {
                                           id : user.id,
                                           username : user.username,
                                           password:user.password
                                        
                                           
                                       }
                                   })
                               }
                           )
                       })
            
         }

      })
})

module.exports = router