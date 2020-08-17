const UsersModal = require('../model/usersModal')

exports.getUsers = (async (req, res) => {

    res.send(await UsersModal.find())
})
exports.postUsers = ((req, res) => {
    new UsersModal(req.body).save().then(() => res.send('add user'))
}
)
exports.deleteUsers = (async(req, res) => {
    res.send(await UsersModal.deleteOne({ _id: req.params.id }))
})

// exports.patchUsers = async(req,res) => {
//     res.send(await UsersModal.updateOne({ _id: req.params.id }, { $set: req.body }))
// }


