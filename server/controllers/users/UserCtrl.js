const User = require('../../models/User')
const bcrypt = require('bcryptjs')

const RegisterUserController = async(req, res)=>{
    const {fullname, email, password} = req.body
    try {
        //check for dublicate users
       const userFound = await User.findOne({email})
       if(userFound){
        return
        res.json({message: "User Already exist"})
        }
        //check if fields are empty
        if(!email || !password || !fullname){
        return
        res.json({message: "All Feilds Are Required"})
        }
        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        //createuser
        const user = User.create({
            fullname,
            email,
            password: hashedPassword
        })
        res.json({
            status: 'Success',
            fullname:user.fullname,
            id:user._id
        })
    } catch (error) {
        console.log('error')
    }
    }

const UserLoginController = async(req, res)=>{
    try {
        res.json({msg: 'Login route'})
    } catch (error) {
        console.log('error')
    }
    }

const GetUserController = async(req, res)=>{
    try {
        res.json({msg: 'Profile route'})
        } catch (error) {
        res.json(error)
        }
    }

const UpdateUserController =async(req, res)=>{
    try {
        res.json({msg: 'Update route'})
    } catch (error) {
        res.json(error)
    }
}

const DeleteUserController = async(req, res)=>{
    try {
        res.json({msg: 'Delete route'})
    } catch (error) {
        res.json(error)
    }
}


module.exports = {
    RegisterUserController, 
    UserLoginController, 
    GetUserController, 
    UpdateUserController,
DeleteUserController}