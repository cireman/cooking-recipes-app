const typesControllers = require('./types.controllers')

const getAllTypes = (req, res) => {
  typesControllers.getAllTypes()
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getTypeById = (req, res) => {
  const id = req.params.type_id
  typesControllers.getTypeById(id)
    .then(response => {
      if(response){
        res.status(200).json(response)
      } else {
        res.status(404).json({message: 'Invalid ID', id})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const postType = (req, res) => {
  const {name} = req.body

  if(name) {
    typesControllers.createType(name)
      .then(response => {
        res.status(201).json(response)
      })
      .catch(err => {
        res.status(400).json({message: err.message})
      })
  } else {
    res.status(400).json({
      message: 'Invalid Data',
      fields: {
        name: 'string'
      }
    })
  }
}

const deleteType = (req,res) => {
  const id = req.params.type_id
  typesControllers.deleteType(id)
    .then(response => {
      if(response){
        res.status(204).json()
      } else {
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  getAllTypes,
  getTypeById,
  postType,
  deleteType
}