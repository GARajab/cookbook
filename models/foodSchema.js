const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: { type: String, require },
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
