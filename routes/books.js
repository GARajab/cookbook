const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books");

router.get("/recipes", booksController.recipesData);

module.exports = router;
