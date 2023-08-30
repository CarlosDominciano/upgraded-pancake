var database = require("../database/config")

function login(email, senha) {
    var query = `
        SELECT * FROM tb_usuario 
        WHERE email = '${email}' 
        AND senha = '${senha}';
    `;
    return database.executar(query);
}

function criarUsuario(nome, email, senha) {
    var query = `
        INSERT INTO tb_usuario (nome, email, senha) 
        VALUES ('${nome}', '${email}', '${senha}');
    `;
    return database.executar(query);
}    

module.exports = {
    login,
    criarUsuario
};