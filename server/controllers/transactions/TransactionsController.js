const GetAllTransactionsCtrl = async(req, res)=>{
    try {
        res.json({msg: 'get all transactions Route'})
    } catch (error) {
        console.log('error')
    }
}

const GetSingleTransaction = async(req, res)=>{
    try {
        res.json({msg: 'get single transaction Route'})
    } catch (error) {
        console.log('error')
    }
}

const CreateTransactionCtrl = async(req, res)=>{
    try {
        res.json({msg: 'create transaction Route'})
    } catch (error) {
        console.log('error')
    }
}

const UpdateTransactionCtrl = async(req, res)=>{
    try {
        res.json({msg: 'Update transaction Route'})
    } catch (error) {
        console.log('error')
    }
}

const DeleteTransactionCtrl = async(req, res)=>{
    try {
        res.json({msg: 'Delete transaction Route'})
    } catch (error) {
        console.log('error')
    }
}


module.exports = {
    GetAllTransactionsCtrl,
    GetSingleTransaction,
    CreateTransactionCtrl,
    UpdateTransactionCtrl,
    DeleteTransactionCtrl
}