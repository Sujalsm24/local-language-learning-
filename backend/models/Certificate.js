const mongoose=require("mongoose");

const certificateSchema=new mongoose.Schema({

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

certificateId:{
type:String,
unique:true
},

issuedDate:{
type:Date,
default:Date.now
}

});

module.exports=mongoose.model("Certificate",certificateSchema);