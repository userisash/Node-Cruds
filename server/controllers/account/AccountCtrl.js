const CreateAccountController = async(req, res)=>{
    try {
        res.json({msg: 'Create Account Route'})
    } catch (error) {
        console.log('error')
    }
}

const GetAccountController = async(req, res)=>{
    try {
        res.json({msg: 'Get Account Route'})
    } catch (error) {
        console.log('error')
    }
}

const DeleteAccountController = async(req, res)=>{
    try {
        res.json({msg: 'Delete Account Route'})
    } catch (error) {
        console.log('error')
    }
}

const UpdateAccountController = async(req, res)=>{
    try {
        res.json({msg: 'Update Account Route'})
    } catch (error) {
        console.log('error')
    }
}

module.exports = {
    CreateAccountController,
    GetAccountController,
    DeleteAccountController,
    UpdateAccountController
}