//creating server by node js vanilla

// const http = require("http");
// const fs = require("fs");

// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// const products = data.products;

// // const data = {age:5}
// /// creating server
// const server = http.createServer((req, res) => {
//   if (req.url.startsWith("/products")) {
//     const id = req.url.split("/")[2];
//     console.log(id);
//     const product = products.find((p) => p.id === +id);
//     console.log(products);

//     res.setHeader("Content-Type", "text/html");
//     let modifiedindex = index
//       .replace("**title**", product.title)
//       .replace("**description**", product.description)
//       .replace("**url**", product.thumbnail);
//     res.end(modifiedindex);
//     return;
//   }

//   console.log(req.url);

//   switch (req.url) {
//     case "/":
//       res.setHeader("Content-Type", "text/html");
//       res.end(index);
//       break;
//     case "/api":
//       res.setHeader("Content-Type", "application/json");
//       res.end(JSON.stringify(data));
//       break;
//     // case '/product':
//     //     res.setHeader('Content-Type', 'text/html')
//     //  let modifiedindex =  index.replace('**title**', products.title).replace('**description**',products.description).replace('**url**',products.thumbnail)
//     //  res.end(modifiedindex)
//     // break;
//     default:
//       res.writeHead(404, "Not Found");
//       res.end();
//       break;
//   }

//   console.log("Server started  123");
//   // res.end(JSON.stringify(data))
//   // res.end("<h1>hello world</h1>")
//   // res.end(data)
// });

// server.listen(8000);

///////////////////////////// creating server by express js ///////////////////////////////
// console.log("express");

// const index = fs.readFileSync("index.html", "utf-8");

// nrarVWGs6IJLpADk

// db paas nrarVWGs6IJLpADk
require('dotenv').config() // for creating environment vvariables
const express = require("express");
const morgan = require("morgan"); // third party middleware
const server = express();
const cors = require('cors');
const path = require('path')
const ejs = require('ejs')



//body parser
server.use(cors());
server.use(morgan("dev")); // default
server.use(express.json());
server.use(express.urlencoded({extended: true}))
server.use(express.static( path.resolve(__dirname, process.env.PUBLIC_DIR)));
console.log(process.env.DB_PASSWORD);
const productRouter = require("./Routes/Product");
server.use("/products", productRouter.routes);
const userRouter = require("./Routes/Users");
server.use("/users", userRouter.routes);
// to get the routing in react js
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname , "dist" , "index.html"))
})

server.set('view engine', 'ejs')


//connection to code
const mongoose = require("mongoose");

// const { Schema } = mongoose;
main().catch((err) => console.log(err));

async function main() {
  //mongodb://127.0.0.1:27017/ecommerce
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

server.listen( process.env.PORT, () => {
  console.log("Express start");
});
// schema




// middlewares


// server.use((req,res,next)=>{
//   // console.log(req.method, req.ip,req.hostname, req.get("User-Agent"), new Date());
//   next()
// })

// const auth = (req,res,next)=>{
//   // console.log(req.query);
//   // if (req.query.password == '123') {
//   //   next()
//   // }else{
//   //   res.sendStatus(401)
//   // }
//   next()
// }

// server.use(auth)

// API ENDPOINTS
// Products
// api root, base url ,

// Create api /products

// Read api

/////// Update data

// with put change all the data

// with patch overirides or changed only the specified data

////////// Delete Data

