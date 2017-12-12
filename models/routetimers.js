/**
 * Created by jhaypeepontz on 12/5/17.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    routeTimerID:{
        type:Number,
        required: true
    },
    routePlanID:{
        type:Number,
        required:true
    },
    timerID:{
        type:Number,
        required:true
    },
    timerDescription:{
        type:String,
        required:true
    },
    timerStart:{
        type:Date,
        required:true
    },
    timerEnd:{
        type:Date,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('RouteTimers', schema);