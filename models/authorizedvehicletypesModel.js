/**
 * Created by jhaypeepontz on 12/5/17.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    vehicleType:{
        type:String,
        required: true
    },
    driverID:{
        type:Number,
        required:true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('AuthorizedVehicleTypes', schema);