const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true },
    price:  {type: Number, min:[0,"wrong price"]},
    discountPercentage: {type: Number, min:[0,"wrong discount"], max:50 },
    rating: {type: Number, min:[0,"wrong rating"], max:5 },
    brand: {type: String, required: true },
    category: {type: String, required: true },
    thumbnail: {type: String, required: true },
    images: [ String ]
    // title: String,
    // description:  String,
    // price:  Number,
    // discountPercentage: Number, 
    // rating: Number,
    // brand:  String,
    // category:  String, 
    // thumbnail: String, 
    // images: [ String ],
  });
  
  exports.Product = mongoose.model('Product', productSchema);