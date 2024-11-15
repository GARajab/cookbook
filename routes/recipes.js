const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipe");

router.get("/", recipeController.index);
router.get("/new", recipeController.new);
router.get("/:recipeId/new", recipeController.addNewRecipe);
router.post("/", recipeController.creat);
router.get("/:recipeId/new", recipeController.edit);
router.put("/:recipeId/new", recipeController.update);
router.delete("/:recipeId", recipeController.deleteById);

module.exports = router;
