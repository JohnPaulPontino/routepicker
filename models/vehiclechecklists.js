/**
 * Created by jhaypeepontz on 12/5/17.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    checklistID:{
        type:Number,
        required: true
    },
    checklistName:{
        type:String,
        required:true
    },
    whenToDo:{
        type:String,
        required:true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('VehicleChecklists', schema);