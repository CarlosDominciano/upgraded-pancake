const btnEntrar = document.getElementById("btn_entrar");

btnEntrar.addEventListener("click", () => {
    console.log("funcionou")
    let email = document.getElementById("ipt_email").value;
    let senha = document.getElementById("ipt_senha").value;
    
    fetch("/usuarios/logar-usuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pirokinha: email,
            senhaServer: senha
        })
    }).then(function (response) {
        if (response.ok) {
            response.json().then(json => {
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;
                setTimeout(function () {
                    window.location = "../principal/principal.html";
                }, 1000);
            });
        } else {
            response.text().then(text => {
                
            });
        }
    }).catch(function (error) {
        console.log(error);
    })
    
})

