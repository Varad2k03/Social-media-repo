const express = require('express')
const app = express()
const path = require('path')
const collection = require("./mongodb")
const collection1 = require("./teachers")
const nodeMailer = require('nodemailer')
const { url } = require('inspector')

const tempelatePath = path.join(__dirname,"../views")
const staticPath = path.join(__dirname, '../public');

app.use(express.json());
app.set("view engine", "ejs")
app.set("views", tempelatePath)
app.use(express.urlencoded({ extended: false }))
app.use(express.static(staticPath));


app.get('/', (req, res) => {
    res.render("login")
});
app.get("/signup",(req,res)=>{
    res.render("signup")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/staff",(req,res)=>{
    res.render("staff")
})
app.get("/admin",(req,res)=>{
    res.render("admin")
})
app.get("/home",(req,res)=>{
    res.render("home")
})

app.post("/signup",async(req,res)=>{
    
    const data={
        name:req.body.name,
        phoneno:req.body.phoneno,
        email:req.body.email,
        password:req.body.password,
        filename:req.body.filename
    }

    await collection.insertMany([data])

    res.render("login")
})

app.post("/login",async(req,res)=>{
   
    try{
        const check = await collection.findOne({name:req.body.name,password:req.body.password})

        if(check.password==req.body.password && check.name==req.body.name){
            res.render("Home")
        }
        else{
            res.render("Wrong Password")
        }      
    }catch{
        res.render("Wrong Password")
    
    }
})

app.post("/login",async(req,res)=>{
   
    try{
        const check = await collection1.findOne({name:req.body.name,password:req.body.password})

        if(check.password==req.body.password && check.name==req.body.name){
            res.render("Home")
        }
        else{
            res.render("Wrong Password")
        }      
    }catch{
        res.render("Wrong Password")
    
    }
})

app.post("/staff",async(req,res)=>{
    
    const data={
        name:req.body.name,
        phoneno:req.body.phoneno,
        email:req.body.email,
        password:req.body.password,
    }

    await collection1.insertMany([data])

    res.render("login")
})



app.listen(8000,()=>{
    console.log('Server on port 8000');
})