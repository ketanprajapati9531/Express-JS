//Customizing the views directory in Express js
const path=require("path");
const express= require("express");
const app = express();

//builtin middleware
const staticPath= path.join(__dirname,"./express7");
//if you want to change folder name from "view" to "templates" add below line...
const templatePath = path.join(__dirname,"./templates");
app.set("view engine","hbs");
//add below line
app.set('views',templatePath);

app.use(express.static(staticPath));

app.get("",(req,res)=>{
     res.render('index7');
});


app.get('/',(req,res)=>{
    res.send("welcome to my home page");
});

app.get('/about',(req,res)=>{
    res.render("about");
});


app.listen(8023,() => {
    console.log('listing to the port');
});
//express.static(root,[options]);