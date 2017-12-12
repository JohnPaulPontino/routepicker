/**
 * Created by jhaypeepontz on 12/5/17.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    routePlanID:{
        type:Number,
        required: true
    },
    routeName:{
        type:String,
        required:true
    },
    routeDate:{
        type:Date,
        required:true
    },
    routeType:{
        type:String,
        required:true
    },
    vehicleID:{
        type:Number,
        required:true
    },
    driverID:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    noPickups:{
        type:Number,
        required:true
    },
    noDone:{
        type:Number,
        required:true
    },
    noSkipped:{
        type:Number,
        required:true
    },
    noPending:{
        type:Number,
        required:false
    },
    routeStartTime:{
        type:Date,
        required:true
    },
    routeEndTime:{
        type:Date,
        required:true
    },
    odometerStart:{
        type:Number,
        required:true
    },
    odometerEnd:{
        type:Number,
        required:true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('RoutePlan', schema);