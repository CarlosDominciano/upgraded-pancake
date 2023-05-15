var express = require("express");
var router = express.Router();

var characterController = require("../controllers/characterController");

router.get("/", function (req, res) {
    characterController.getAll(req, res);
});
  
router.get("/get-favorited-characters/:fkCharacter", function (req, res) {
    characterController.getFavoritedCharacters(req, res);
});
  

module.exports = router;