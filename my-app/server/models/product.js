const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: Number,
  XL: String,
  XR: String,
  Function: String
});

const ProductModel = mongoose.model("Bisection", productSchema);

module.exports = ProductModel;
