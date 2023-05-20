var database = require("../database/config")

function getAll() {
  var query =
    `SELECT * FROM tb_characters;`
  return database.executar(query);
}

function getFavoritedCharacters(idCharacter) {
  var query = `
  SELECT count(*) as votes, tb_characters.name
  FROM tb_users 
  INNER JOIN tb_characters 
  ON tb_users.fk_character = tb_characters.id
  WHERE fk_character = ${idCharacter};
  `;
  return database.executar(query);
}

module.exports = {
    getAll,
    getFavoritedCharacters,
};