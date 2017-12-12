/**
 * Created by jhaypeepontz on 12/5/17.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    landfillTicketID:{
        type:Number,
        required: true
    },
    routePlanID:{
        type:Number,
        required:true
    },
    ticketNumber:{
        type:Number,
        required:true
    },
    primaryMaterial:{
        type:String,
        required:true
    },
    materialUnit:{
        type:String,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    totalCost:{
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

module.exports = mongoose.model('LandfillTickets', schema);