var usuarioModel = require("../models/usuarioModel");

function login(req, res) {
    var email = req.body.pirokinha;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Email undefined! por favor, coloca algo ai corno");
    } else if (senha == undefined) {
        res.status(400).send("Password undefined!");
    } else {
        usuarioModel.login(email, senha)
        .then(
            function (result) {
                if (result.length == 1) {
                    res.json(result[0]);
                } else if (result.length == 0) {
                    res.status(403).send("Email or password invalid(s)");
                } else {
                    res.status(403).send("Have more than one user with this email and password!");
                }
            }
        ).catch(
            function (error) {
                res.status(500).json(error.sqlMessage);
            }
        );
    }
}

function criarUsuario(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Name undefined!");
    } else if (email == undefined) {
        res.status(400).send("Email undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Password undefined!");
    } else {
        usuarioModel.criarUsuario(nome, email, senha)
        .then(
            function (result) {
                res.json(result);
            }
        ).catch(
            function (error) {
                res.status(500).json(error.sqlMessage);
            }
        );
    }
}
module.exports = {
    login,
    criarUsuario
}