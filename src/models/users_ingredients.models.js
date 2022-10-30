const {DataTypes} = require('sequelize')

const db = require('../utils/database')
const Users = require('./users.models')
const Ingredients = require('./ingredients.models')

const UserIngredients = db.define('user_ingredients', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'user_id',
    references: {
      key: 'id',
      model: Users
    }
  },
  ingredientId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'ingredient_id',
    references: {
      key: 'id',
      model: Ingredients
    }
  },
  amount: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = UserIngredients