import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    rol: {type: String,maxlength: 30, default: 'USER_ROLE',trim:true, required: true},
    ssn: {type: String,maxlength: 4, trim:true, required: true},
    state: {type: Number,default: 1}, // 1 is active , 2 is inactive
},{
    timestamps: true
});

const User = mongoose.model('Users',userSchema);
export default User;