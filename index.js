// const express = require('express')   //this is old syntax
import express from "express";          // this is new syntax
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import { moviesRouter } from "./routes/movies.js";
import { genPassword } from './routes/helper.js'
import { usersRouter } from "./routes/users.js";

dotenv.config();
// console.log(process.env);

const app = express();

const PORT = process.env.PORT;

// const MONGO_URL = "mongodb://localhost";
// const MONGO_URL = "mongodb+srv://b29we_first:firstdata@cluster0.hywut.mongodb.net";
const MONGO_URL = process.env.MONGO_URL;


async function createConnection() {
  const client = new MongoClient(MONGO_URL)
  await client.connect()
  console.log("Mongo is connected");
  return client;
}

export const client = await createConnection();

// app.use - applies - middleware to all requests
//  converts the data in JSON data
app.use(express.json());

// cors is a third party middleware
// it allows access of data of data to the users requesting it. Filter can be added to allow only specific users to access the data.
app.use(cors());



app.get('/', function (req, res) {
  res.send('Hello World 😉 😎')
})

// movies -> router(different file)
app.use('/movies', moviesRouter);
// users -> router(different file)
app.use('/users', usersRouter);


//  MOBILES data

// const mobiles = [
//   {
//     model: "OnePlus 9 5G",
//     img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
//     company: "Oneplus"
//   },
//   {
//     model: "Iphone 13 mini",
//     img:
//       "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
//     company: "Apple"
//   },
//   {
//     model: "Samsung s21 ultra",
//     img: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
//     company: "Samsung"
//   },
//   {
//     model: "Xiomi mi 11",
//     img: "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
//     company: "Xiomi"
//   }
// ];

//demo-app-MOBILE-route
// app.get('/mobiles', function (req, res) {
//   res.send(mobiles)
// })

// POST mobiles


app.post('/mobiles', async function (req, res) {
  const newMobiles = req.body;
  const result = await client.db("b29we").collection("mobiles").insertMany(newMobiles);
  res.send(result)
})

// GET mobiles
app.get('/mobiles', async function (req, res) {
  const newMobiles = req.body;
  const result = await client.db("b29we").collection("mobiles").find({}).toArray();
  res.send(result)
})

app.listen(PORT, () => console.log(`Started server at ${PORT} 😎`));




















