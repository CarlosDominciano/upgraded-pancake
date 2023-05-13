var express = require("express");
var router = express.Router();

var userController = require("../controllers/userController");

router.post("/post-user", function (req, res) {
    userController.createUser(req, res);
})

router.post("/get-user", function (req, res) {
    userController.login(req, res);
});

module.exports = router;