var database = require("../database/config")

function getAll() {
  var query =
    `SELECT * FROM tb_outfit;`
  return database.executar(query);
}

function getFavoritedOutfits(idOutfit) {
  var query = `
    SELECT count(*) as votes, tb_outfit.name
    FROM tb_user
    INNER JOIN tb_outfit
    ON tb_user.fk_outfit = tb_outfit.id
    WHERE fk_outfit = ${idOutfit};
  `;
  return database.executar(query);
}

module.exports = {
    getAll,
    getFavoritedOutfits,
};