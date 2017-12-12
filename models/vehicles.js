/**
 * Created by jhaypeepontz on 12/5/17.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    vehicleID:{
        type:Number,
        required: true
    },
    vehicleName:{
        type:String,
        required:true
    },
    vehicleType:{
        type:String,
        required:true
    },
    plateNumber:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Vehicles', schema);