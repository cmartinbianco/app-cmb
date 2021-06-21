const express = require('express');
const mongoose = require('mongoose');
const User = require('../user');
const route = express.Router();

route.post('/', async (req, res) => {
    const { firstName, lastName } = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});

route.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err })
    }
    // res.json({status: 'Hello World! version 1'});
});

module.exports = route;