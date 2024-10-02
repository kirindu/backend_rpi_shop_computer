import mongoose from "mongoose";

const shopComputerSchema = mongoose.Schema({

    name: {type: String,maxlength: 20, trim:true, required: true},
    notes: {type: String,maxlength: 250, trim:true, required: false},
    RFID: {type: String,maxlength: 100, trim:true, required: true},
    BeaconUID: {type: String,maxlength: 100, trim:true, required: true},
    state: {type: Number,default: 1}, // 1 is active , 2 is inactive
},{
    timestamps: true
});

const shopComputer = mongoose.model('ShopComputers',shopComputerSchema);
export default shopComputer;