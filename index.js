// const express = require('express')
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import { moviesRouter } from "./routes/movies.js";

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
app.use(express.json());

// cors is a third party middleware
app.use(cors());





app.get('/', function (req, res) {
  res.send('Hello World 😉 😎')
})

// movies -> router(different file)
app.use('/movies', moviesRouter)

app.listen(PORT, () => console.log(`Started server at ${PORT} 😎`));



















