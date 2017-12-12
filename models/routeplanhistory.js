/**
 * Created by jhaypeepontz on 12/5/17.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    routePlanHistoryID:{
        type:Number,
        required: true
    },
    timestamp:{
        type:Date,
        required:true
    },
    speed:{
        type:Number,
        required:true
    },
    locationLat:{
        type:Number,
        required:true
    },
    locationLong:{
        type:Number,
        required:true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('RoutePlanHistory', schema);