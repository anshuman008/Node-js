const mongoose = require('mongoose');

// creating schema  for users
const userSchema  = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    jobTitle:{
        type: String,
    },
    gender:{
        type: String,
    },
},{timestamps:  true});


// now creating model

const User = mongoose.model("user",userSchema);

module.exports  = User;