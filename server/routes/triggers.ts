const express = require('express');
const mongoose = require('mongoose')

const router = express.Router();

const Trigger = require('../models/triggers');


// Getting All

router.get('/', async (req : any , res : any) => {
    const user_id = req.params;
    try{
        const triggers = await Trigger.find();
        res.json({triggers});
    } catch (err : any) {
        res.status(500).json({message: err.message});
    }

});

// Getting posts from user 

router.get('userTriggers/:id', async (req : any , res : any) => {
    let triggers;
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({message : 'ID not valid'});
    }
    try {
        triggers = await Trigger.find({user_id: req.params.id});
        if (triggers == null) {
            return res.status(404).json({message : 'Cannot find user'});
        }

    } catch (err : any) {
        return res.status(500).json({message: err.message});
    }

    return res.status(200).json({triggers});
});

// Creating Trigger Array

router.post('/', async (req : any , res : any) => {
    const trigger = new Trigger({
        user_id: req.body.user_id,
        data : req.body.data
    });
    try {
        const newTrigger  = await trigger.save();
        res.status(201).json(newTrigger);
    } catch (err : any) {
        res.status(400).json({message : err.message});
    }
});


// Add to trigger array 
router.patch('/', async (req: any, res : any) => {
    const trigger = new Trigger({
        symptom_name : req.body.symptom_name,
        triggers : req.body.triggers
    });
});

// Updating One

router.patch('/', (req : any , res : any) => {

});

// Deleting One 

router.delete('/:id', (req : any , res : any) => {

});

module.exports = router