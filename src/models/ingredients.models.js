const {DataTypes} = require('sequelize')
const Types = require('./types.models')
const db = require('../utils/database')

const Ingredients = db.define('ingredients', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  typeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'type_id',
    reference: {
      key: 'id',
      model: Types
    }
  },
  urlImg: {
    type: DataTypes.STRING,
    validate: {
      usUrl: true
    },
    field: 'url_img'
  }
}, {
  timestamps: false
})

module.exports = Ingredients