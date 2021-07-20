// import the express module
const cool = require('cool-ascii-faces');
const express=require('express');
const exp=require('./genearte_password');


// get the instance of the server
const app=express();
const port=process.env.PORT||5000;

// middleware to parse the request body 
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// host static files
app.use("/",express.static("public"));

app.get('/cool', (req, res) => res.send(cool()))

// routes 
app.post('/form',(req,res)=>{
    console.log(req.body);
    let data=req.body;
    let password=exp.generatePassword(data);
    res.send(`Generated Password: ${password} `);
})

// start the server at the port 
const server=app.listen(port,(err)=>{
    if(err)
        console.log("error: "+err);
    else    
        console.log("server started on port: "+"http://localhost:"+port);
})