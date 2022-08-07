
const path=require("path");
const express= require("express");
const app = express();

//builtin middleware
const staticPath= path.join(__dirname,"./express6");
app.set("view engine","hbs");
//app.use(express.static(staticPath));

app.get("",(req,res)=>{
     res.render('index6');
});


app.get('/',(req,res)=>{
    res.send("welcome to my home page");
});


app.listen(8018,() => {
    console.log('listing to the port');
});
//express.static(root,[options]);