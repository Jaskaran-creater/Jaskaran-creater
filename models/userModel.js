import mongoose from "mongoose";
import validator from 'validator';
//schema
const userSchema = new mongoose.Schema(
    {
    name:{
        type:String,
            required:[true,'Name Is Require']
        },
        lastName:{
            type:String,
        },
        email:{
            type:String,
            require:[true,'Email is Require'],
            unique:true,
            validate:validator.isEmail
        },
        password:{
            type:String,
            required:[true,'password is require'],
            minlength:[6,"password length should be greater than 6 characters"],
        },
        location:{
            type:String,
            default:"India",
        },
    },
    {timestamps:true}
);

export default mongoose.model('User',userSchema)