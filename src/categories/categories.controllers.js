const Categories = require('../models/categories.models')

const getAllCategories = async() => {
  const data = await Categories.findAll()
  return data
}

const getCategoriesById = async(id) => {
  const data = await Categories.findOne({
    where: {
      id
    }
  })
  return data
}

const createCategory = async(title) => {
  const data = await Categories.create({
    title
  })
  return data
}

const deleteCategory = async(id) => {
  const data = await Categories.destroy({
    where: {
      id
    }
  })
  return data
}

module.exports = {
  getAllCategories,
  getCategoriesById,
  createCategory,
  deleteCategory
}