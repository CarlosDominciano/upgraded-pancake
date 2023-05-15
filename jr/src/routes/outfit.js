var express = require("express");
var router = express.Router();

var outfitController = require("../controllers/outfitController");

router.get("/", function (req, res) {
    outfitController.getAll(req, res);
});

router.get("/get-favorited-outfits/:fkOutfit", function (req, res) {
    outfitController.getFavoritedOutfits(req, res);
});
  

module.exports = router;