 
const mongoose= require('mongoose')
const usersSchema = mongoose.Schema(
    {
        nom: {type:String},
        prenom: {type:String},
        role: {type:String},
        motDePasse: {type:String},
        telephone: {type:String},
        email:{type:String}
     }
)

module.exports=mongoose.model('users',usersSchema)