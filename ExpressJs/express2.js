//Routing in express
/*
www.ketan.com - welcome to my home page
/about - welcome to my about us page
/contact -welcome to my contact us page
/temp -welcome temp page
*/
const express= require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("welcome to my home page");
});

app.get('/about',(req,res)=>{
    res.send("welcome to my About us page");
});

app.get('/contact',(req,res)=>{
    res.send("welcome to my contact us  page");
});

app.get('/temp',(req,res)=>{
    res.send("welcome to  temp  page");
});

app.listen(8005,()=>{
    console.log("listing to the port");
});
