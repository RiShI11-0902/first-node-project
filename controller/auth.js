const jwt = require("jsonwebtoken");
const modal = require("../modal/user");
const User = modal.User;
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const privateKey = fs.readFileSync(
  path.resolve(__dirname, "../privateKey"),
  "utf-8"
);

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  var token = jwt.sign({ email: req.body.email }, privateKey, {
    algorithm: "RS256",
  });
  console.log(typeof user.password);
  const hash = bcrypt.hashSync(req.body.password.toString(), 10);
  user.token = token;
  user.password = hash;

  try {
    await user.save();
    // console.log(User);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const doc = await User.findOne({ email: req.body.email });
    const isAuth = bcrypt.compareSync(
      req.body.password.toString(),
      doc.password.toString()
    );
    if (isAuth) {
      var token = jwt.sign({ email: req.body.email }, privateKey, {
        algorithm: "RS256",
      });
      doc.token = token
      doc.save()
      console.log(token);
      res.json(token)
    }else{
      res.sendStatus(401)
    }
  } catch (error) {
    res.status(401).json(error);
  }
};
