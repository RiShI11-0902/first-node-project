const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;

// console.log(users);

exports.createProduct = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  // res.json({ type: "POST" });
  res.json(users);
};

exports.getAllProduct = (req, res) => {
  // route middleware
  console.log(req.params);
  // res.json({type:'GET'})
  res.json(users);
  console.log(users);
  // res.status(201).send("<h1>hello world</h1>")
  // res.sendFile("")
  // res.json(users)
  // res.sendStatus(404)
};

exports.getIndividualProduct = (req, res) => {
  // route middleware
  const id = +req.params.id;
  console.log("id is" + id);
  const pro = users.find((p) => p.id === id);
  res.json(pro);
};

exports.replaceProduct = (req, res) => {
  // route middleware
  const id = +req.params.id;
  const proIndex = users.findIndex((p) => p.id === id);
  users.splice(proIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};
exports.updateProduct = (req, res) => {
  // res.json({ type: "PATCH" });
  const id = +req.params.id;
  const proIndex = users.findIndex((p) => p.id === id);
  const product = users[proIndex];
  users.splice(proIndex, 1, { ...product, ...req.body });
  res.status(201).json();
  console.log(users[proIndex]);
};
exports.deleteProduct = (req, res) => {
  // res.json({ type: "PATCH" });
  const id = +req.params.id;
  const proIndex = users.findIndex((p) => p.id === id);
  const product = users[proIndex];
  users.splice(proIndex, 1, { ...proIndex, ...req.body });
  res.status(201).json(product);
};
