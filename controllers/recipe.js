const express = require("express");
const router = express.Router();
const User = require("../models/user");


const addNewRecipe = reqiure("./recipe.js");
router.get("/", async (req, res) => {
  res.render("recipes/new.ejs");
});

module.exports = router;
