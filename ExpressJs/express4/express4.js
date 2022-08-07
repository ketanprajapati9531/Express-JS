
const path=require("path");
const express= require("express");
const app = express();

//relative path   ../.../.../../ type path name
//absolute path
const staticPath= path.join(__dirname,"./express4");
//builtin middleware
app.use(express.static(staticPath));

app.get('/',(req,res)=>{
    res.send("welcome to my home page");
});

app.get('/about',(req,res)=>{
    res.send("welcome to my About us page");
});

app.get('/contact',(req,res)=>{
    res.send("welcome to my contact us  page");
});


app.listen(9015,()=>{
    console.log("listing to the port");
});
//express.static(root,[options])