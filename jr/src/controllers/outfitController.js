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

module.exports = {
    getAll,
}