var database = require("../database/config")

function login(email, password) {
    var query = `
        SELECT * FROM tb_users WHERE email = '${email}' AND password = '${password}';
    `;
    return database.executar(query);
}

function createUser(name, email, password) {
    var query = `
        INSERT INTO tb_users (name, email, password) VALUES ('${name}', '${email}', '${password}');
    `;
    return database.executar(query);
}

function updateOutitAndCharacter(fkCharacter, fkOutfit, id) {
    var query = `
        UPDATE tb_users
        SET fk_character = ${fkCharacter}, fk_outfit = ${fkOutfit}
        WHERE id = ${id};
        `;
    return database.executar(query);
}
    
    
    

module.exports = {
    login,
    createUser,
    updateOutitAndCharacter
};