const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product");
const Productonepoint = require("./models/onepoint");
const Productsecant = require("./models/secant");
const ProductNewton = require("./models/Newton");
app.use(express.json());
mongoose.connect(
  "mongodb+srv://Game123:1441@cluster0-ufco0.mongodb.net/numer?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.listen(3001, () => {
  console.log("Application is running on port 3001");
});

app.get("/Bisection", async (req, res) => {
  const products = await Product.findOne({
    id: Math.floor(Math.random() * 2 + 1)
  });
  res.json(products);
});

app.get("/Falseposition", async (req, res) => {
  const products = await Product.findOne({
    id: Math.floor(Math.random() * 2 + 1)
  });
  res.json(products);
});

app.get("/Onepoint", async (req, res) => {
  const products = await Productonepoint.findOne({
    id: Math.floor(Math.random() * 2 + 1)
  });
  res.json(products);
});

app.get("/Newton", async (req, res) => {
  const products = await ProductNewton.findOne({
    id: Math.floor(Math.random() * 2 + 1)
  });
  res.json(products);
});

app.get("/Secant", async (req, res) => {
  const products = await Productsecant.findOne({
    id: Math.floor(Math.random() * 2 + 1)
  });
  res.json(products);
});

app.post("/onepoint", async (req, res) => {
  const payload = req.body;
  const product = new Productonepoint(payload);
  await product.save();
  res.status(201).end();
});
