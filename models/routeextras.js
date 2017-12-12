/**
 * Created by jhaypeepontz on 12/5/17.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    routeExtrasID:{
        type:Number,
        required: true
    },
    routePlanID:{
        type:Number,
        required:true
    },
    customerID:{
        type:Number,
        required:true
    },
    pickupType:{
        type:String,
        required:true
    },
    estimatedWeight:{
        type:Number,
        required:true
    },
    timestamp:{
        type:Date,
        required:true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('RouteExtras', schema);