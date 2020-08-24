const UsersModal = require('../model/usersModal')

exports.getUsers = (async (req, res) => {

    res.send(await UsersModal.find())
})

exports.deleteUsers = (async(req, res) => {
    res.send(await UsersModal.deleteOne({ _id: req.params.id }))
})




