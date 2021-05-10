import data from './data.js';
import express from 'express';
//module.require('express');
//var data=require('./data.js');
//var express=require('express');
const app = express();

app.get('/api/products/:id', (req, res)=>{
    const product =data.products.find((x)=>x._id === req.params.id);
    if(product){
        res.send(product);
    } else{
        res.status(404).send({message: 'Girl not Found'});
    }
});

app.get('/api/products', (req, res)=>{
    res.send(data.products);
});
app.get('/', (req, res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

//se debe poner en el package.json lo siguiente: "type":"module",