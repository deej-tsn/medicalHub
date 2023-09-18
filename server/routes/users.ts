const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const User = require('../models/user');


// Getting All

router.get('/',async (req : any , res : any) => {
    try{
        const users = await User.find();
        res.json({users});
    } catch (err : any) {
        res.status(500).json({message: err.message});
    }

});

// Getting One

router.get('/:id', getUser, (req : any , res : any) => {
    res.send(res.user);
});

// Creating One

router.post('/', async (req : any , res : any) => {
    const user = new User({
        first_name: req.body.first_name,
        second_name: req.body.second_name,
        email : req.body.email,
        password_hash : req.body.password_hash
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err : any) {
        res.status(400).json({message : err.message});
    }
});

// Updating One

router.patch('/', (req : any , res : any) => {

});

// Deleting One 

router.delete('/:id',getUser, async (req : any , res : any) => {
    try {
        await res.user.deleteOne();
        res.json({message : 'Deleted User'});
    } catch (err : any) {
        res.status(500).json({message: err.message});
    }

});

async function getUser(req : any, res: any, next : any){
    let user;
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({message : 'ID not valid'});
    }
    try {
        user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({message : 'Cannot find user'});
        }

    } catch (err : any) {
        return res.status(500).json({message: err.message});
    }

    res.user = user;
    next();
}

module.exports = router;