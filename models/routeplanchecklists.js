/**
 * Created by jhaypeepontz on 12/5/17.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    routePlanChecklistID:{
        type:Number,
        required: true
    },
    routePlanID:{
        type:Number,
        required:true
    },
    checklistID:{
        type:Number,
        required:true
    },
    checklistActionID:{
        type:Number,
        required:true
    },
    pass:{
        type:Boolean,
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

module.exports = mongoose.model('RoutePlanChecklists', schema);