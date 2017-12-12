/**
 * Created by jhaypeepontz on 12/4/17.
 */

const mongoose = require('mongoose');
let Schema = mongoose.Schema;
//Genre Schema

let schema = new Schema({
    userID:{
        type:Number,
        required: true
    },username:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false
    },
    avatar:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:false
    },
    state:{
        type:String,
        required:false
    },
    contactNum:{
        type:String,
        required:false
    },
    roles:{
        type:String,
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

module.exports = mongoose.model('Users', schema);