const Instructions = require('../models/instructions.models')

const uuid = require('uuid')

const getAllInstructions = async() => {
  const inputData = await Instructions.findAll()
  return inputData
}

const getInstructionById = async(id) => {
  const inputData = await Instructions.findOne({
    where: {
      id
    }
  })
  return inputData
}

const createInstruction = async(data) => {
  const inputData = Instructions.create({
    id: uuid.v4(),
    description: data.description,
    step: data.step,
    recipeId: data.recipeId
  })
  return inputData
}

const updateInstruction = async(id, data) => {
  const inputData = await Instructions.update(data, {
    where: {
      id
    }
  })
  return inputData
}

const deleteInstruction = async(id) => {
  const inputData = await Instructions.destroy({
    where: {
      id
    }
  })
  return inputData
}

module.exports = {
  getAllInstructions,
  getInstructionById,
  createInstruction,
  updateInstruction,
  deleteInstruction
}