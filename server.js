const express = require('express');
const recipeRouter = require('./routes/recipes.routes');
const db = require('./db');
const ingredientRouter = require('./routes/ingredients.routes');
const fullRecipesRouter = require('./routes/fullRecipes.routes');
const randomRecipesRouter = require('./routes/randomRecipes.routes');
const app = express();

app.use(express.json());

app.use('/ingredients', ingredientRouter);

app.use('/recipes', recipeRouter);

// app.use('/addingredientinrecipe', recipeRouter);

app.use('/fullRecipes', fullRecipesRouter);

app.use('/randomRecipes', randomRecipesRouter);

app.listen(process.env.PORT || 3003, () => {
    console.log('Server is listening port 3003')
}); 