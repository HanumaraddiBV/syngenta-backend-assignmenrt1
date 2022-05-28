const express = require("express");

const app = express();
const BooksDataController = require("./controllers/books.controller")
app.use(express.json());




app.use("/books", BooksDataController);
// app.use("/latests", LatestFundController);

module.exports = app;