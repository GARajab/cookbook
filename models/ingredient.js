const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: { type: String, require },
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;
