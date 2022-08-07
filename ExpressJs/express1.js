/*
What is ExpressJS used for?
Express is a node js web application framework that provides broad features for building
 web and mobile applications. It is used to build a single page, multipage, and hybrid 
 web application. It's a layer built on the top of the Node js that helps manage servers
 and routes.

Is Express js a framework?
Express is a popular unopinionated web framework, written in JavaScript and hosted
within the Node. js runtime environment. This module explains some of the key benefits
of the framework, how to set up your development environment and how to perform common 
web development and deployment tasks.

Features of Express. js
Faster Server side development. 
Middleware. Middleware is a part of the program that has access to the database.
client request.
Routing. 
Templating. 
Debugging.
*/

const express = require("express");
const app= express();
app.get("/",(req,res)=> {
    res.send("Hello from thehhh Express");
});
app.get('/about',(req,res)=>{
    res.send("Hello from thehhh about us");
});
app.listen(8004,()=>{
    console.log("listing to the port");
});
