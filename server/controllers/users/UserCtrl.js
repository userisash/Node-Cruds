const RegisterUserController = async(req, res)=>{
    try {
        res.json({msg: 'Register route'})
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