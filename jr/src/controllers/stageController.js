var stageModel = require("../models/stageModel");

function getAll(req, res) {
    stageModel
    .getAll()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (erro) {
        res.status(204).json(erro.sqlMessage);
    });
}
module.exports = {
    getAll
}