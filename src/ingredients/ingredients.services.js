const ingredientsControllers = require('./ingredients.controllers')

const getAllIngredients = (req, res) => {
  ingredientsControllers.getAllIngredients()
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getIngredientById = (req, res) => {
  const id = req.params.ingredient_id
  ingredientsControllers.getIngredientById(id)
    .then(repsonse => {
      if(response) {
        res.status(200).json(response)
      } else {
        res.status(404).json({message: `Invalid ID, ${id}`})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const postIngredient = (req, res) => {
  const {name, typeId, urlImg} = req.body

  if(name && typeId) {
    ingredientsControllers
      .createIngredient({
        name,
        typeId,
        urlImg
      })
      .then(response => {
        res.status(201).json(response)
      })
      .catch(err => {
        res.status(400).json({message: err.message})
      })
  } else {
    res.status(400).json({
      message: 'Missing Data',
      fields: {
        name: 'string',
        typeId: 'integer',
        urlImg: 'string'
      }
    })
  }
}

const patchIngredient = (req, res) => {
  const {name, typeId, urlImg} = req.body
  const id = req.params.ingredient_id
  ingredientsControllers.updateIngredient(id, {name, typeId, urlImg})
    .then(response => {
      if(response[0]) {
        res.status(200).json({message: `Ingredient with ID ${id} edited successfully`})
      } else {
        res.status(404).json({message: 'Invalid ID', id})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const deleteIngredient = (req, res) => {
  const id = req.params.ingredient_id
  ingredientsControllers.deleteIngredient(id)
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
  getAllIngredients,
  getIngredientById,
  postIngredient,
  patchIngredient,
  deleteIngredient
}