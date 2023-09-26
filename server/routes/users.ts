const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const jwt = require('../utils/jwt');

const router = express.Router();
const User = require('../models/user');

const saltRounds = 10;

// Getting All

router.get('/',async (req : any , res : any) => {
    try{
        const users = await User.find();
        res.json({users});
    } catch (err : any) {
        res.status(500).json({message: err.message});
    }

});

router.post('/test', (req:any, res:any) => {
    console.log(req.body);
    res.status(200).json({message: "works"});
})

// Getting One

router.get('/:id', getUser, (req : any , res : any) => {
    res.send(res.user);
});

// Get User By Email & Password

router.post('/signIn', async (req : any, res : any) =>{
    let user : any;
    try {
        user = await User.findOne({email : req.body.email});
        if (user == null) {
            return res.status(404).json({message : 'Cannot find user'});
        }
        bcrypt.compare(req.body.password, user.password_hash, function(err : Error, result : boolean) {
            if(err) return res.status(500).json({message: err.message});
            if (result) {
                let token = jwt.generateAccessToken(user);
                return res.status(201).json(token);
            }
            else {
                return res.status(300).json({message : "password incorrect"});
            }
          });
    } catch (err : any) {
        return res.status(500).json({message: err.message});
    }
} )


// Creating One

router.post('/', async (req : any , res : any) => {
    bcrypt.hash(req.body.password, saltRounds, async function (err : any, hash : any) {
        if(err) return res.status(500).json({message : err.message});
        const user = new User({
            first_name: req.body.first_name,
            second_name: req.body.second_name,
            email : req.body.email,
            password_hash : hash
        });
        try {
            const newUser = await user.save();
            res.status(201).json(newUser);
        } catch (err : any) {
            res.status(400).json({message : err.message});
        }
    });
    
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