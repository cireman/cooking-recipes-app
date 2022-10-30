const {DataTypes} = require('sequelize')

const db = require('../utils/database')
const Users = require('./users.models')
const Recipes = require('./recipes.model')

const UserRecipes = db.define('user_recipes',
{
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
  recipeId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'recipe_id',
    references: {
      key: 'id',
      model: Recipes
    }
  },
  favorite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
})

module.exports = UserRecipes