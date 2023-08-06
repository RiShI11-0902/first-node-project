// const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;

const { default: mongoose } = require("mongoose");
const model = require("../modal/product");
// const { error } = require("console");
const Product = model.Product;

// console.log(Product);

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    // console.log(product);
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
  }

  // product.save()
  // console.log(product);

  // console.log(req.body);
  // products.push(req.body);
  // res.json({ type: "POST" });
  // res.json(products);
};

exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
  }

  // route middleware
  // console.log(req.params);
  // res.json({type:'GET'})
  // res.json(products);
  // res.status(201).send("<h1>hello world</h1>")
  // res.sendFile("")
  // res.json(products)
  // res.sendStatus(404)
};

exports.getIndividualProduct = async (req, res) => {
  // const id = +req.params.id; // for mongodb
  const id = req.params.id; // for mongoose
  const products = await Product.findById(id);
  res.json(products);
  // route middleware
  // console.log("id is" + id);
  // const pro = products.find((p) => p.id === id);
  // res.json(pro);
};

exports.replaceProduct = async (req, res) => {
  // route middleware
  // const id = +req.params.id;
  const id = req.params.id;
  const products = await Product.findOneAndReplace({ _id: id }, req.body, {
    new: true,
  });
  res.json(products);
  // const proIndex = products.findIndex((p) => p.id === id);
  // products.splice(proIndex, 1, { ...req.body, id: id });
  // res.status(201).json();
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const products = await Product.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res.json(products);
  // res.json({ type: "PATCH" });
  // const id = +req.params.id;
  // const proIndex = products.findIndex((p) => p.id === id);
  // const product = products[proIndex];
  // products.splice(proIndex, 1, { ...product, ...req.body });
  // res.status(201).json();
  // console.log(products[proIndex]);
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  const products = await Product.findOneAndDelete({ _id: id });
  res.json(products);
  // res.json({ type: "PATCH" });
  // const id = +req.params.id;
  // const proIndex = products.findIndex((p) => p.id === id);
  // const product = products[proIndex];
  // products.splice(proIndex, 1, { ...proIndex, ...req.body });
  // res.status(201).json(product);
};
