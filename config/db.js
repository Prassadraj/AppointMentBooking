const mongoose=require('mongoose')
const colors=require('colors')
const  VITE_MongoURL=`mongodb+srv://prassadpr10:prassadpr10@cluster0.decbeum.mongodb.net/Doc-App`

const connectDB=async()=>{
    try {
        await mongoose.connect(VITE_MongoURL)
        console.log(`Mongo Connected${mongoose.connection.host}`);
    } catch (error) {
        console.log(`${colors}`.bgRed)
    }
}
module.exports=connectDB