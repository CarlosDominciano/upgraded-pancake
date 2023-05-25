var database = require("../database/config")

function getAll() {
  var query =
    `SELECT * FROM tb_stage;`
  return database.executar(query);
}

module.exports = {
    getAll
};