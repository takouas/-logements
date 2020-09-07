const UsersModal = require('../model/usersModal')
const bcrypt = require('bcryptjs')
exports.getUsers = (async (req, res) => {

    res.send(await UsersModal.find())
})

exports.deleteUsers = (async (req, res) => {
    res.send(await UsersModal.deleteOne({ _id: req.params.id }))
})

exports.patchProfileUsers = async (req, res) => {
    res.send(await UsersModal.updateOne({ _id: req.params.id }, { $set: { nom: req.body.nom, prenom: req.body.prenom, telephone: req.body.telephone } }))
}

exports.patchPassUsers = async (req, res) => {
    
    res.send(await UsersModal.updateOne({ _id: req.params.id }, {
        $set: {
            motDePasse: bcrypt.hashSync(req.body.motDePasse, await bcrypt.genSalt(10))
        }
    })
    )


}
