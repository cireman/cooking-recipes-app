const recipesControllers = require('./recipes.controllers')

const getAllRecipes = (req, res) => {
  recipesControllers.getAllRecipes()
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

//? /api/v1/recipe/2/ingredients/8
//? router.get('api/v1/recipe/:recipe_id/ingredients/:ingredient_id')
const getRecipeById = (req, res) => {
  const id = req.params.recipe_id
  recipesControllers.getRecipeById(id)
    .then(response => {
      if(response) {
        res.status(200).json(response)
      } else {
        res.status(400).json({message: 'Invalid ID'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const postRecipe = (req, res) => {
  const userId = req.user.id
  const {title, description, urlImg, time, portions, categoryId, origin} = recipesControllers.createRecipe

  if(title && description && time && portions && categoryId) {
    recipesControllers.createRecipe({
      title, description, urlImg, time, portions, origin, userId, categoryId})
        .then(response => {
          res.status(201).json(response)
        })
        .catch(err => {
          res.status(400).json({message: err.message})
        })
  } else {
    res.status(400).json({message: 'Missing Data',
  field: {
    title: 'string',
    description: 'string',
    time: 'integer',
    portions: 'integer',
    categoryId: 'integer'
  }})
  }
}

const patchRecipe = (req, res) => {
  const {title, description, urlImg, time, portions, categoryId, origin} = req.body
  const id = req.params.recipe_id

  recipesControllers.updateRecipe(id, {title, description, urlImg, time, portions, categoryId, origin})
    .then(response => {
      if(response[0]) {
        res.status(200).json({message: `Recipe with ${id} updated successfully`})
      } else {
        res.status(404).json({message: 'Invalid ID', id})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const deleteRecipe = (req, res) => {
  const id = req.params.recipe_id

  recipesControllers.deleteRecipe(id)
    .then(response => {
      if(response) {
        res.status(204).json()
      } else {
        res.status(404).json({message: 'Invalid ID', id})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
  }

module.exports = {
  getAllRecipes,
  getRecipeById,
  postRecipe,
  patchRecipe,
  deleteRecipe
}