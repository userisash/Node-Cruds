const mongoose = require('mongoose')

const dbConnect = async() =>{
    try {
        await mongoose.connect('mongodb+srv://track:1234@cluster0.sbppweh.mongodb.net/TrackerApp?retryWrites=true&w=majority')
        console.log('db connected')
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

dbConnect()