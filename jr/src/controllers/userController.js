var userModel = require("../models/userModel");

function login(req, res) {
    var email = req.body.emailServer;
    var password = req.body.passwordServer;

    if (email == undefined) {
        res.status(400).send("Email undefined!");
    } else if (password == undefined) {
        res.status(400).send("Password undefined!");
    } else {
        userModel.login(email, password)
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

function createUser(req, res) {
    var name = req.body.nameServer;
    var email = req.body.emailServer;
    var password = req.body.passwordServer;

    if (name == undefined) {
        res.status(400).send("Name undefined!");
    } else if (email == undefined) {
        res.status(400).send("Email undefined!");
    } else if (password == undefined) {
        res.status(400).send("Password undefined!");
    } else {
        userModel.createUser(name, email, password)
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
    createUser
}