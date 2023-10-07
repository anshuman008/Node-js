const User = require('../models/user');

async function handleGetAllUsers(req,res){
    const allDbuseres = await User.find({});
     return res.json(allDbuseres);
}


async function handleGetById(req,res){
    const ans = await User.findById(req.params.id);
      
    if(!ans){
      return res.status(404).json({mesg: "user not found"});
    }
    else{
         return res.json(ans);
    }
}

async function handlCreateUser(req,res){
    let obj  = req.body;

    if(!obj.first_name  || !obj.last_name || !obj.email || !obj.gender || !obj.job_title){
        res.status(400).json({mesg: "some fields are missing"});
    }


   const resuult = await User.create({
    firstName: obj.first_name,
    lastName:  obj.last_name,
    email: obj.email,
    gender: obj.gender,
    jobTitle: obj.job_title,
 })

 return res.status(201).json({msg: "sucessss!!", id: resuult._id});
}


async function handlDeleteUser(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({mesg: "delteddd"});
}


async  function handleUpdateUser(req,res){
    await User.findByIdAndUpdate(req.params.id, {lastName: "CHANGEDD"});
    return res.json({mesg: "sucesss"});
}


module.exports = {
    handleGetAllUsers,
    handleGetById,
    handlCreateUser,
    handlDeleteUser,
    handleUpdateUser
}