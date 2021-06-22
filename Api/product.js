const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/product');
const route = express.Router();

route.post('/', async (req, res) => {
    const product = new Product({
        descr: req.body.descr,
        age: req.body.age,
        // dateOfBirth: req.body.dateOfBirth,
        locations: req.body.locations,
        onSite: req.body.onSite
    });
    try {
        const saveProduct = await product.save();
        res.json(saveProduct);
    } catch (err) {
        res.json({ message: err });
    }
});

route.get('/:productID', async (req, res) => {
    try {
        const products = await Product.findById(req.params.productID);
        res.json(products);
    } catch (err) {
        res.json({ message: err })
    }    
});

route.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.json({ message: err })
    }    
});

route.delete('/:productID', async (req, res) => {
    try {
        const products = await Product.remove({_id: req.params.productID});
        res.json(products);
    } catch (err) {
        res.json({ message: err })
    }    
});

route.patch('/:productID', async (req, res) => {
    try {
        const products = await Product.updateOne(
            {_id: req.params.productID}, 
            {$set: { descr: req.body.descr } }
        );
        res.json(products);
    } catch (err) {
        res.json({ message: err })
    }    
});

module.exports = route;