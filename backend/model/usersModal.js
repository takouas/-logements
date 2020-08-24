
const mongoose = require('mongoose')
const usersSchema = mongoose.Schema(
    {
        nom: { type: String, required: true, min: 3, max: 255 },
        prenom: { type: String, required: true, min: 3, max: 255 },
        role: { type: String, required: true, min: 3, max: 255 },
        motDePasse: { type: String, required: true, min: 6, max: 1024 },
        telephone: { type: String, required: true, min: 6, max: 255 },
        email: { type: String, required: true, min: 3, max: 255 }
    }
)

module.exports = mongoose.model('users', usersSchema)