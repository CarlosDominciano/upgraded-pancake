var database = require("../database/config")

function login(email, password) {
    var query = `
        SELECT * FROM tb_user WHERE email = '${email}' AND password = '${password}';
    `;
    return database.executar(query);
}

function createUser(name, email, password) {
    var query = `
        INSERT INTO tb_user (name, email, password) VALUES ('${name}', '${email}', '${password}');
    `;
    return database.executar(query);
}

module.exports = {
    login,
    createUser
};