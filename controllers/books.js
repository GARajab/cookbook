const express = require("express");
// const router = express.Router();
const User = require("../models/user");
// const Recipes = require("../models/books");
// const bcrypt = require("bcrypt");
// const isSignedIn = require("../middleware/is-sign-in");
const fromAuth = require("../controllers/auth");

exports.recipesData = async (req, res) => {
  req.session.user = {
    username: fromAuth.userInDatabase.username,
    _id: fromAuth.userInDatabase._id,
    createdAt: fromAuth.userInDatabase.createdAt,
  };
  const allRecipes = await User.find();
  res.render("recipes", { Recipes: allRecipes });
};
