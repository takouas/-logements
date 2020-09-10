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
    try {
        const userExist = await UsersModal.findById({ _id: req.params.id })

        bcrypt.compare(req.body.motDePasse, userExist.motDePasse, async function (err, result) {
            if (result == true) {

                let salt = await bcrypt.genSalt(10);
                password2 = await bcrypt.hash(req.body.nouveauMotDePasse, salt);
                const user = await UsersModal.findByIdAndUpdate(req.params.id, {

                    motDePasse: password2,

                });

                res.send(user);
            }

        })


    } catch (err) {
        console.log(err)

    }
}



   // res.send(await UsersModal.updateOne({ _id: req.params.id }, {
    //     $set: {
    //         motDePasse: bcrypt.hashSync(req.body.motDePasse, await bcrypt.genSalt(10))
    //     }
    // })
    // )