const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/recipes')

router.get("/recipes", recipesController.recipesData);

module.exports = router