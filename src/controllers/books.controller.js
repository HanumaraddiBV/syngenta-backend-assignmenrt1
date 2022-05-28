const express = require("express");
const router = express.Router();

const Books = require("../models/books.model");

const crudController = require("./crud.controller")

router.post("", crudController(Books).post);


  router.get("",crudController(Books).get)
  router.get("/category",crudController(Books).getCategory)
  router.get("/title",crudController(Books).getAllData)
  router.get("/author",crudController(Books).getAllDataAuthor)
  router.get("/status",crudController(Books).getStatus)
module.exports = router;
