/**
 * Created by jhaypeepontz on 12/5/17.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    workorderId:{
        type:Number,
        required: true
    },
    customerId:{
        type:Number,
        required:true
    },
    customerName:{
        type:String,
        required:true
    },
    customerAddress:{
        type:String,
        required:true
    },
    workOrderType:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    vehicleId:{
        type:Number,
        required:true
    },
    sequenceNum:{
        type:Number,
        required:true
    },
    serviceTimeMinutes:{
        type:Number,
        required:true
    },
    scheduledStartTime:{
        type:Date,
        required:true
    },
    notes:{
        type:String,
        required:false
    },
    status:{
        type:String,
        required:true
    },
    containerLat:{
        type:String,
        required:true
    },
    containerLong:{
        type:String,
        required:true
    },
    routePlanID:{
        type:Number,
        required:true
    },
    startTime:{
        type:Date,
        required:true,
    },
    endTime:{
        type:Date,
        required:true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('UserRoles', schema);