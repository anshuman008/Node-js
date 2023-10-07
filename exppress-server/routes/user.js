const express = require('express');
const {handleGetAllUsers,handleGetById,handlCreateUser,handlDeleteUser,handleUpdateUser} = require('../controllers/user');

const router = express.Router();

// router.get('/users', async (req,res)=>{
   
//     const allUsers =  await User.find({});

//    const list = `<ol>${allUsers.map((user)=>`<li>${user.firstName} - ${user.email}</li>`).join("")}</ol>`;
//    res.send(list);
// })


/// group functions

router
.route('/')
.get(handleGetAllUsers)
.post(handlCreateUser)


router
.route('/:id')
.get(handleGetById)
.delete(handlDeleteUser)
.patch(handleUpdateUser);


//get users

// router.get('/',handleGetAllUsers);

// getby id
// router.get('/:id',handleGetById);


// create a new element
// router.post('/', handlCreateUser);


// delete
// router.delete('/:id',handlDeleteUser);


// update the element 
// router.patch('/:id',handleUpdateUser);


module.exports = router;