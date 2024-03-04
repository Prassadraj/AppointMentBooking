const usermodel=require('../models/UserModel')
const bcrypt=require('bcryptjs')

const registerController = async(req,res) => {
    try {
        const existingUser=await usermodel.findOne({email:req.body.email}) 
        if(existingUser){
            return res.status(200).send({message:"user already exist",success:false})

        }
        const password=req.body.password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=bcrypt.hash(password,salt)
        req.body.password=hashedPassword;
        const newUser=new usermodel(req.body)
        await newUser.save()
        res.send({message:"Register Successfully",success:true})

    } catch (error) {
        res.status(500).send({success:false,message:"something went Wrong.."})
    }
};
const loginController = () => {};

module.exports = { loginController, registerController };
