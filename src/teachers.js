const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/hackfusion2")
.then(()=>{
    console.log("terachers database Connection Successfull");
})
.catch(()=>{
    console.log("Connection Failed");
})

const staffSchema = new mongoose.Schema({
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
    
})

const collection1 = new mongoose.model("collection1",staffSchema)

module.exports=collection1