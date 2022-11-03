const instructionsControllers = require('./instructions.controllers')

const getAllInstructions = (req, res) => {
  instructionsControllers.getAllInstructions()
    .then(response => {
      res.status(200).json(response)
    })
}

const getInstructionById = (req, res) => {
  const id = req.params.instruction_id
  instructionsControllers.getInstructionById(id)
    .then(response => {
      if(response) {
        res.status(200).json(response)
      } else {
        res.status(404).json({message: 'Invelid ID', id})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const postInstruction = (req, res) => {
  const {description, step, recipeId} = req.body

  if(description && step && recipeId) {
    instructionsControllers.createInstruction({
      description, step, recipeId
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
        description: 'string',
        step: 'integer',
        recipeId: 'uuid'
      }
    })
  }
}

const patchInstruction = (req, res) => {
  const id = req.params.instruction_id
  const {description, step, recipeId} = req.body

  instructionsControllers.updateInstruction(id, {
    description, step, recipeId
  })
    .then(response => {
      if(response[0]){
        res.status(200).json(`Instruction with ID: ${id} edited succesfully`)
      } else {
        res.status(404).json({message: 'Invalid ID', id})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const deleteInstruction = (req, res) => {
  const id = req.params.instruction_id
  instructionsControllers.deleteInstruction(id)
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
  getAllInstructions,
  getInstructionById,
  postInstruction,
  patchInstruction,
  deleteInstruction
}