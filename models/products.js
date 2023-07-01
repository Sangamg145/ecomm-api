const mongoose = require('mongoose')
let productsSchema = new mongoose.Schema({
    name:{type:String,required:true},
    desc:{type:String,required:true},
    img:{type:String,required:true},
    size:{type:Array,required:true},
    color:{type:Array,required:true},
    liked:{type:Boolean,default:false}
},
{timestamps:false},
{ collection : 'products',versionKey: false })

let productListSchema = new mongoose.Schema({
    name:{type:String,required:true},
    desc:{type:String,required:true},
    img:{type:String,required:true},
    category:{type:Array,required:true},
},
{timestamps:false},
{ collection : 'productList',versionKey: false })
const Products = mongoose.model('products',productsSchema)
const ProductList = mongoose.model('productList',productListSchema)
module.exports = {Products,ProductList}
