const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    first_name:{
        type : String,
        require : true
    },
    second_name: {
        type : String,
        require : true
    },
    email : {
        type: String,
        require : true,
        unique : true
    },

    password_hash : {
        type : String,
        require : true
    },
    createdDate: {
        type: Date,
        required: true,
        default : Date.now
    },
    lastLogDate: {
        type: Date,
        require: true,
        default : Date.now
    }
})

module.exports = mongoose.model('User', userSchema);