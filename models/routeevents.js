/**
 * Created by jhaypeepontz on 12/5/17.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    eventID:{
        type:Number,
        required: true
    },
    routePlanID:{
        type:Number,
        required:true
    },
    workOrderID:{
        type:Number,
        required:true
    },
    activityType:{
        type:String,
        required:true
    },
    startTime:{
        type:Date,
        required:true
    },
    endTime:{
        type:Date,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    comments:{
        type:String,
        required:true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('RouteEvents', schema);