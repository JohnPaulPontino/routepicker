/**
 * Created by jhaypeepontz on 12/5/17.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    checklistActionID:{
        type:Number,
        required: true
    },
    checklistID:{
        type:Number,
        required:true
    },
    actionStep:{
        type:Number,
        required:true
    },
    displayOrder:{
        type:Number,
        required:true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('VehicleChecklistActions', schema);