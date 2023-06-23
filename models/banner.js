const mongoose = require('mongoose')
let bannerSchema = new mongoose.Schema({
    name:{type:String,required:true},
    desc:{type:String,required:true},
    img:{type:String,required:true},
},
{timestamps:false},
{ collection : 'banner',versionKey: false })
module.exports = mongoose.model('banner',bannerSchema)
