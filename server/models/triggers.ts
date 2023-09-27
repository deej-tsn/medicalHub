const mongoose = require('mongoose');


const triggerSchema = new mongoose.Schema({
    user_id:{
        type: String,
        require : true,
        unique : true
    },
    data: [{
        symptom_name:{
            type : String,
            require : true
        },
        date: {
            type: Date,
            required: true,
            default : Date.now
        },
        triggers:[{
            name: { type :String, require : true},
            value : { type : Number, min : 0, max: 100 , default : 0}
        }]
    }]
})

module.exports = mongoose.model('Trigger', triggerSchema);