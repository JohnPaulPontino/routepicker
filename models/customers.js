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
    customerName:{
        type:String,
        required:true
    },
    customerType:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipcode:{
        type:String,
        required:false
    },
    country:{
        type:String,
        required:true
    },
    charges:{
        type:Number,
        required:true
    },
    payments:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Customers', schema);