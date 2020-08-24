const express = require('express')
const route = express.Router()
// const verify = require('./verifyToken')
const { getAnnonce, postAnnonce, patchAnnonce, deleteAnnonce } = require('../controllers/annoncesControllers')
route.get('/',  getAnnonce)
route.post('/', postAnnonce)
route.delete('/:id', deleteAnnonce)
route.patch('/:id', patchAnnonce)
module.exports = route