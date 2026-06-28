const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
{
title:{
type:String,
required:true
},

category:{
type:String,
required:true,
enum:[
"Vowels",
"Consonants",
"Barakhadi",
"Numbers",
"Colors",
"Grammar"
]
},

description:{
type:String,
default:""
},

video:{
type:String,
default:""
},

image:{
type:String,
default:""
},

audio:{
type:String,
default:""
},

content:{
type:String,
required:true
},

order:{
type:Number,
default:1
}
},
{
timestamps:true
}
);

module.exports=mongoose.model("Lesson",lessonSchema);