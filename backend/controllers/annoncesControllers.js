const AnnoncesModal = require('../model/annoncesModal')

exports.getAnnonce = (async (req, res) => {
    res.send(await AnnoncesModal.find())
}
)
exports.postAnnonce = ((req, res) => {
    new AnnoncesModal(req.body).save().then(() => res.send('added'))
})
exports.deleteAnnonce = (async (req, res) => {
    res.send(await AnnoncesModal.deleteOne({ _id: req.params.id }))
})
exports.patchAnnonce = async (req, res) => {
    res.send(await AnnoncesModal.updateOne({ _id: req.params.id }, { $set: req.body }))
}




