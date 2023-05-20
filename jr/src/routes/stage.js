var express = require("express");
var router = express.Router();

var stageController = require("../controllers/stageController");

router.get("/", function (req, res) {
    stageController.getAll(req, res);
});

module.exports = router;