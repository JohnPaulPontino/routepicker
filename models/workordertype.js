/**
 * Created by jhaypeepontz on 12/5/17.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    workordertype:{
        type:String,
        required: true
    },
    workorderdesc:{
        type:String,
        required:true
    },
    assignedtemplate:{
        type:String,
        required:true
    },
    chargeperunit:{
        type:Number,
        required:true
    },
    estimatedweight:{
        type:Number,
        required:true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('WorkOrderType', schema);