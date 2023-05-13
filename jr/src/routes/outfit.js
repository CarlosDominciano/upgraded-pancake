var express = require("express");
var router = express.Router();

var outfitController = require("../controllers/outfitController");

router.get("/", function (req, res) {
    outfitController.getAll(req, res);
});
  

module.exports = router;