var outfitModel = require("../models/outfitModel");

function getAll(req, res) {
    outfitModel
    .getAll()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (erro) {
        res.status(204).json(erro.sqlMessage);
    });
}

function getFavoritedOutfits(req, res) {
    const fkOutfit = req.params.fkOutfit;
    outfitModel
    .getFavoritedOutfits(fkOutfit)
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (erro) {
        res.status(204).json(erro.sqlMessage);
    });
}
module.exports = {
    getAll,
    getFavoritedOutfits
}