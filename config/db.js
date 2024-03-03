const mongoose=require('mongoose')
const colors=require('colors')

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MongoURL)
        console.log(`Mongo Connected${mongoose.connection.host}`);
    } catch (error) {
        console.log(`${colors}`.bgRed)
    }
}
module.exports=connectDB