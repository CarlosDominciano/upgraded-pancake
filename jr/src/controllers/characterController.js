var characterModel = require("../models/characterModel");

function getAll(req, res) {
    characterModel
    .getAll()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (erro) {
        res.status(204).json(erro.sqlMessage);
    });
}

function getFavoritedCharacters(req, res) {
    const fkCharacter = req.params.fkCharacter;
    characterModel
    .getFavoritedCharacters(fkCharacter)
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (erro) {
        res.status(204).json(erro.sqlMessage);
    });
}

module.exports = {
    getAll,
    getFavoritedCharacters
}