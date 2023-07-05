const mongoose = require('mongoose')
let cartSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    name:{type:String,required:true},
    desc:{type:String,required:true},
    img:{type:String,required:true},
    size:{type:Array,required:true},
    color:{type:Array,required:true},
    liked:{type:Boolean,default:false}
},
{timestamps:false},
{ collection : 'cart',versionKey: false })
const Cart = mongoose.model('cart',cartSchema)
module.exports = {Cart}
