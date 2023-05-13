var express = require("express");
var router = express.Router();

var characterController = require("../controllers/characterController");

router.get("/", function (req, res) {
    characterController.getAll(req, res);
});
  

module.exports = router;