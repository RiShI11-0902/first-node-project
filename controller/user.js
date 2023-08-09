const fs = require("fs");
const path = require('path')
const modal = require("../modal/user")
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = modal.User
// const data = JSON.parse(fs.readFileSync(path.resolve( __dirname , "../data.json", "utf-8")));
// const users = data.users;

// console.log(users);



exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }

  // route middleware
  // console.log(req.params);
  // res.json({type:'GET'})
  // res.json(Users);
  // res.status(201).send("<h1>hello world</h1>")
  // res.sendFile("")
  // res.json(Users)
  // res.sendStatus(404)
};

exports.getIndividualUser = async (req, res) => {
  // const id = +req.params.id; // for mongodb
  const id = req.params.id; // for mongoose
  const users = await User.findById(id);
  res.json(users);
  // route middleware
  // console.log("id is" + id);
  // const pro = Users.find((p) => p.id === id);
  // res.json(pro);
};

exports.replaceUser = async (req, res) => {
  // route middleware
  // const id = +req.params.id;
  const id = req.params.id;
  const Users = await User.findOneAndReplace({ _id: id }, req.body, {
    new: true,
  });
  res.json(Users);
  // const proIndex = Users.findIndex((p) => p.id === id);
  // Users.splice(proIndex, 1, { ...req.body, id: id });
  // res.status(201).json();
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const Users = await User.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res.json(Users);
  // res.json({ type: "PATCH" });
  // const id = +req.params.id;
  // const proIndex = Users.findIndex((p) => p.id === id);
  // const User = Users[proIndex];
  // Users.splice(proIndex, 1, { ...User, ...req.body });
  // res.status(201).json();
  // console.log(Users[proIndex]);
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const Users = await User.findOneAndDelete({ _id: id });
  res.json(Users);
  // res.json({ type: "PATCH" });
  // const id = +req.params.id;
  // const proIndex = Users.findIndex((p) => p.id === id);
  // const User = Users[proIndex];
  // Users.splice(proIndex, 1, { ...proIndex, ...req.body });
  // res.status(201).json(User);
};
