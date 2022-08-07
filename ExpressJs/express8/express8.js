//using partials in Express js
const path=require("path");
const express= require("express");
const app = express();
const hbs = require("hbs");

//builtin middleware
const staticPath= path.join(__dirname,"./express8");
//if you want to change folder name from "view" to "templates" add below line...
const templatePath = path.join(__dirname,"./templates/views");
//path for partials
const partialsPath = path.join(__dirname,"./templates/partials");



app.set("view engine","hbs");
//add below line
app.set('views',templatePath);
//register partials
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get("",(req,res)=>{
     res.render('index8');
});



app.get('/',(req,res)=>{
    res.send("welcome to my home page");
});
app.get('/home',(req,res)=>{
    res.render("home");      //home code in views folder
});
app.get('/about',(req,res)=>{
    res.render("about");     //about code in views folder
});
app.get('/contact',(req,res)=>{
    res.render("contact");   //contact code in views folder
});


app.listen(8047,() => {
    console.log('listing to the port');
});
//express.static(root,[options]);