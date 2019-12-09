const express = require ('express');
const cors  = require ('cors');
const app = express();
const products= require('./products.json');
app.listen(3000);
app.use(cors());


app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/views/home.html");
});

app.get("/products",(req, res)=>{
    res.json(products);
});

app.get("/product/:productId", (req, res) =>{
    const id = req.params.productId;
    console.log(products);
    let pro = null;
    for(let p of products){
        if(id == p._id) {
             pro = p;
        }
    }
    if (pro == null) {
        res.json({
            message: "Den vre8ike"
    });
    } else {
        res.json(pro);
    }
});

app.get("/product-v2/:productId", (req, res)=>{
    const id = req.params.productId;
    const productFound = products.find(p => p._id == id);
    res.json(productFound);
});
