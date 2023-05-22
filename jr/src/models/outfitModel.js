var database = require("../database/config")

function getAll() {
  var query =
    `SELECT * FROM tb_outfits;`
  return database.executar(query);
}

function getFavoritedOutfits(idOutfit) {
  var query = `
    SELECT count(*) as votes, tb_outfits.name
    FROM tb_users
    INNER JOIN tb_outfits
    ON tb_users.fk_outfit = tb_outfits.id
    WHERE fk_outfit = ${idOutfit};
  `;
  return database.executar(query);
}

module.exports = {
    getAll,
    getFavoritedOutfits,
};