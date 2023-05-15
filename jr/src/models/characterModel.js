var database = require("../database/config")

function getAll() {
  var query =
    `SELECT * FROM tb_character;`
  return database.executar(query);
}

function getFavoritedCharacters(idCharacter) {
  var query = `
  SELECT count(*) as votes, tb_character.name
  FROM tb_user 
  INNER JOIN tb_character 
  ON tb_user.fk_character = tb_character.id
  WHERE fk_character = ${idCharacter};
  `;
  return database.executar(query);
}

module.exports = {
    getAll,
    getFavoritedCharacters,
};