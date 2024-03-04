const express =require('express')
const { loginController, registerController } = require('../controllers/usercontroller')


//routes object
const router=express.Router()

//Routes LOGIN POST

router.post('/login',loginController)

//routes REGISTER POST
router.post('/register',registerController)
//module export
module.exports=router
