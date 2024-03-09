const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://raju:demo@cluster0.hfr0oan.mongodb.net/");
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    }
})
const collection =new mongoose.model("collection1",userSchema);
module.exports=collection;