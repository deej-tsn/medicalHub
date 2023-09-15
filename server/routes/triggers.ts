const express = require('express');

const router = express.Router();


// Getting All

router.get('/',(req : any , res : any) => {
    res.send('Hello World');

});

// Getting One

router.get('/:id', (req : any , res : any) => {
    req.params.id
});

// Creating One

router.post('/', (req : any , res : any) => {

});

// Updating One

router.patch('/', (req : any , res : any) => {

});

// Deleting One 

router.delete('/:id', (req : any , res : any) => {

});

module.exports = router