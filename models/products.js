const mongoose = require('mongoose')
let productsSchema = new mongoose.Schema({
    category:{type:Array},
    items:{type:Array}
},
{timestamps:false},
{ collection : 'products',versionKey: false })
module.exports = mongoose.model('products',productsSchema)
