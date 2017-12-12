/**
 * Created by jhaypeepontz on 12/5/17.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    customerId:{
        type:Number,
        required: true
    },
    workordertype:{
        type:String,
        required:true
    },
    pickupDay:{
        type:String,
        required:true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('UserRoles', schema);