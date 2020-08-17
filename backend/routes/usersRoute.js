const express = require('express')
const route = express.Router()
const { getUsers, postUsers, deleteUsers, patchUsers } = require('../controllers/usersControllers')
route.get('/', getUsers)
route.post('/', postUsers)
route.delete('/:id', deleteUsers)
// route.patch('/:id', patchUsers)
module.exports = route