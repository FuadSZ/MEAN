const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserS = mongoose.Schema({
    nickname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserS);

module.exports.getUserById = function(id){
    User.findById(id);
}

module.exports.getUserByNickname = function(nickname, callback){
    const query = {
        nickname: nickname
    }
    User.findOne(query, callback);
}

module.exports.addUser = function(user, callback){
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) throw err;
            user.password = hash;
            user.save(callback);
        });
    });
}

module.exports.passwordCompare = function(userPassword, dbPasswordHash, callback){
    bcrypt.compare(userPassword, dbPasswordHash, (error, isMatch)=>{
        if(error) throw error;
        callback(null, isMatch);
    })
}
