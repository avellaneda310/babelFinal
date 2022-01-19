const express = require("express");
const app = express();
const port = 2000;
var bodyParser  =  require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login',function(req,res){
    var user_name=req.body.user;
    var password=req.body.password;
    var p = "User name = "+user_name+", password is "+password;
    res.end(p);
});

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/products", (req,res) => {
   const products = [
     {
       id: 1,
       name: "hammer",
     },
     {
       id: 2,
       name: "screwdriver",
     },
     ,
     {
       id: 3,
       name: "wrench",
     },
   ];

  res.json(products);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));