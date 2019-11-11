const express = require ('express');
const chalk= require('chalk');
const products= require('./products.json');
const app = express();
app.listen(5000);

app.get("/",(req,res)=>{
   res.send("Welcome to our store");
});

app.get("/products",(req,res)=>{
   res.json(products);
});

console.log(products.length);

products.forEach(prods=>{
    console.log(prods.name + " : " + prods.price + "\u20ac");
});

let sum = 0;
let max = products[0].price;
let min = products[0].price;

for(let p of products) {
    sum = sum + p.price;
    if (p.sale) {
        console.log(p.name + " : " + chalk.bgBlue(p.sale)  + "\u20ac");
    }else{
        console.log(p.name + " : " + p.price + "\u20ac");
    }
    if(max<p.price) {
            max = p.sale;
    }
    else{
        max=p.price;
    }
    if(min>p.price ){
        min= p.price;
    }
}

console.log(max);
console.log(min);
console.log(sum);
console.log("average:" + sum/products.length);

