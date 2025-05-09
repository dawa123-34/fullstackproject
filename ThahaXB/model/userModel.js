const mongoose =require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userEmail :{
        type :String,
        required: [true,'userEmail must be provided'] 
    },
    userPhoneNumber:{
        type :Number,
        required :[true,'userPhoneNumber must be provided']
    },
    userName:{
        type : String,
        required :[true,'userName must be provided'] 
    },
    userPassword: {
        type :String,
        required :[true,'password must be provided']
    },
    role :{
        type :String,
        enum :["user","admin"],
        default :"user"
    },
    otp: {
        type : Number
    },
    otpExpiresAt: {
        type: Date 
    },
    isOtpVerified :{
    type :Boolean,
    default :false
}
})

const User = mongoose.model("User",userSchema)
module.exports = User