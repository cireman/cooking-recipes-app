const Types = require('../models/types.models')
const uuid = require('uuid')

const getAllTypes = async() => {
  const inputData = await Types.findAll()
  return inputData
}

const getTypeById = async(id) => {
  const inputData = await Types.findOne({
    where: {
      id
    }
  })
  return inputData
}

const createType = async(data) => {
  const inputData = await Types.create({
    id: uuid.v4(),
    name: data.name
  })
  return inputData
}

const updateType = async(id, data) => {
  const inputData = await Types.update(data, {
    where: {
      id
    }
  })
  return inputData
}

const deleteType = async(id) => {
  const inputData = await Types.destroy({
    where: {
      id
    }
  })
  return inputData
}

module.exports = {
  getAllTypes,
  getTypeById,
  createType,
  updateType,
  deleteType
}