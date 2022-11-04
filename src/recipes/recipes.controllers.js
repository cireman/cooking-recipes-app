const Recipes = require('../models/recipes.models')
const uuid = require('uuid')


const getAllRecipes = async() => {
  const inputData = await Recipes.findAll()
  return inputData
}

const getRecipeById = async(id) => {
  const inputData = await Recipes.findOne({
    where: {
      id
    }
  })
  return inputData
}

const createRecipe = async(data) => {
  const inputData = await Recipes.create({
    id: uuid.v4(),
    title: data.title,
    description: data.description,
    urlImg: data.urlImg,
    time: data.time,
    portions: data.portions,
    userId: data.userId,
    categoryId: data.categoryId,
    origin: data.origin,
    likes: data.likes
  })
  return inputData
}

const updateRecipe = async(id, data) => {
  const inputData = await Recipes.update(data, {
    where: {
      id
    }
  })
  return inputData
}

const deleteRecipe = async(id) => {
  const inputData = await Recipes.destroy({
    where: {
      id
    }
  })
  return inputData
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  deleteRecipe,
  updateRecipe
}