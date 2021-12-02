const express = require('express');
const User = require('../models/user');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const dbConfig = require('../configuration/dbConfig');

router.post('/registration', (request, response)=>{
    const user = new User({
        nickname: request.body.nickname,
        email: request.body.email,
        password: request.body.password
    });

    User.addUser(user, (error)=>{
        if(error){
            response.json({success: false, message: 'User not added'});   
        }
        else{
            response.json({success: true, message: 'User added'});
        }
    });
});

router.post('/auth', function(request, response){
    const login = request.body.nickname;
    const password = request.body.password;

    User.getUserByNickname(login, (error, user)=>{
        if(error) throw error;
        if(!user){
            return response.json({success: false, message:'User not found'});
        }

        //compare
        User.passwordCompare(password, user.password, (error, IsMatch)=>{
            if(error) throw error;
            if(IsMatch){
                jwt.sign(user.toJSON(), dbConfig.secretKey, {
                    expiresIn:60
                });
                response.json({
                    success:true,
                    user: {
                        id:user.id,
                        nickname:user.nickname,
                        email: user.email
                    }
                });
            }
            else{
                return response.json({success:false, message:'Password is wrong'});
            }
        });
    })
});

router.get('/personalarea', passport.authenticate('jwt', {session:false}), function(request, response){
    response.send('Personal area');
});

module.exports = router;