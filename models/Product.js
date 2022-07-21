const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema(
    {
        title: {type: String, required: true},
        desc: {type: String, required: true},
        img: {type: String, required: true },
        categories: {type:Array },
        size: {type:String},
        price: {type: Number, required: true },
        color: { type: String }      
    },
    {timestamps: true}
);




module.exports = mongoose.model('Product', ProductSchema)