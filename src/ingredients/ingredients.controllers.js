const uuid = require('uuid')
const Ingredients = require('../models/ingredients.models')

const getAllIngredients = async() => {
  const inputData = await Ingredients.findAll()
  return inputData
} 

const getIngredientById = async(id) => {
  const inputData = await Ingredients.findOne({
    where: {
      id
    }
  })
  return inputData
}

const createIngredient = async(data) => {
  const inputData = await Ingredients.create({
    id: uuid.v4(),
    name: data.name,
    urlImg: data.urlImg,
    typeId: data.typeId
  })
  return inputData
}

const updateIngredient = async(id, data) => {
  const inputData = await Ingredients.update(data, {
    where: {
      id
    }
  })
  return inputData
}

const deleteIngredient = async(id) => {
  const inputData = await Ingredients.destroy({
    where: {
      id
    }
  })
  return inputData
}

module.exports = {
  getAllIngredients,
  getIngredientById,
  createIngredient,
  updateIngredient,
  deleteIngredient
}