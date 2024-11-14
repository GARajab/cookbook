const mongoose = require("moongose");

const recipeSchema = new mongoose.Schema({
  name: { type: String, require },
  instruction: { type: String, require },
  owner: {
    type: mongoose.Schema.Types.objectId,
    ref: "User",
  },
  name: mongoose.Schema.Types.objectId,
  ref: "Ingredient",
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
