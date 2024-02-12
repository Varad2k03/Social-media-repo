const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/hackfusion2")
.then(()=>{
    console.log("Connection Successfull");
})
.catch(()=>{
    console.log("Connection Failed");
})

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    },
    filename:{
        type:String,
        required:true
    }
})


const collection = new mongoose.model("collection",userSchema)

module.exports=collection