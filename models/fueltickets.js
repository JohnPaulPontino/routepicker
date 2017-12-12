/**
 * Created by jhaypeepontz on 12/5/17.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    fuelTicketID:{
        type:Number,
        required: true
    },
    routePlanID:{
        type:Number,
        required:true
    },
    ticketNumber:{
        type:String,
        required:true
    },
    fuelStationName:{
        type:String,
        required:true
    },
    fuelType:{
        type:String,
        required:true
    },
    fuelUnit:{
        type:String,
        required:true
    },
    quantity:{
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

module.exports = mongoose.model('FuelTickets', schema);