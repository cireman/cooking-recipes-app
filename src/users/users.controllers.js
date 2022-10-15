//? Dependencies
const uuid = require('uuid')

const {hashPassword} = require('../utils/crypto')
const Users = require('../models/users.models')

const getAllUsers = async () => {
  const data = await Users.findAll()
  return data
}

const getUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id:id
    }
  })
  return data
}

const createUser = async (data) => {
  const newUser = await Users.create({
    data:{
      id: uuid.v4(),
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      password: hashPassword(data.password),
      phone: data.phone,
      birthday: data.birthday,
      gender: data.gender,
      country: data.country
    }
  })
  return newUser
}

const updateUser = async (id, data) => {
  const result = await Users.update(data, {
    where: {
      id
    }
  })
  return result
}

const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id
    }
  })
  return data
}

const getUserByEmail = async(email) => {
  //? SELECT * FROM users where email = sahid.kick@example.com
  const data = await Users.findOne({
    where: {
      email: email
    }
  })
  return data
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail
}