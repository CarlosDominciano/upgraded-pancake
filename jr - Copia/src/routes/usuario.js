var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/criar-usuario", function (req, res) {
    usuarioController.criarUsuario(req, res);
})

router.post("/logar-usuario", function (requisicao, resposta) {
    usuarioController.login(requisicao, resposta);
});

module.exports = router;