const express= require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("welcome to my home page");
});

app.get('/about',(req,res)=>{
    //using res.write multiple html element write..
    res.write("<h1> About us page</h1>");
    res.write("<h1>welcome to my About us page</h1>");
});

app.get('/contact',(req,res)=>{
    res.send("welcome to my contact us  page");
});

app.get('/temp',(req,res)=>{
    res.send({
        id:1,
        name: "ketan"   //object pass..{ } use
    });
});    
app.get('/service',(req,res)=>{
    res.send([        //array object pass... [{ }] use
    {
        id:1,
        name: "ketan"
    },
    {
        id:2,
        name: "neel"
    },
    {
        id:3,
        name: "nilay"
    },
    {
        id:4,
        name: "rahul"
    },
    {
        id:5,
        name: "saurav"
    }
]);
});

app.listen(8007,()=>{
    console.log("listing to the port");
});
/*
the method are identical when an object or array is passed,but res.json() will also 
convert non-objects,such as null and undefined ,which are not valid JSON.
*/