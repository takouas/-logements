
const mongoose = require('mongoose')
const annoncesSchema = mongoose.Schema(
    {
        prix: { type: String },
        nombreDePersonne: { type: String },
        gouvernorat: { type: String },
        typeDeBien: { type: String },
        periode: { type: String },
        image: { type: String },
        description: { type: String },
        emailAnnonce: { type: String },
        telephoneAnnonce: { type: String },
        emailUsers: { type: String }
    }
)

module.exports = mongoose.model('annonces', annoncesSchema)