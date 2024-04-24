const mongoose=require('mongoose')
async function dbConnect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/e-commerce')
        console.log('database connect')
        
    } catch (error) {
        console.log(error)
    }
   
}
module.exports=dbConnect; 