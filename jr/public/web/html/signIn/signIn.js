const form = document.getElementById("form_sign_in")
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const btn = document.getElementById("btn_sign_in")
    const icon = '<ion-icon name="cloud-download"></ion-icon>'
    const textSignIn = "Sign In"
    loading(btn.id, icon);

    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const formArray = [email, password]

    if ((!email.value || !password.value) ||
    (password.value.length < 8 && password.value.length > 0)) {
        if (!email.value || !password.value) {
            for (let i = 0; i < formArray.length; i++) {
                const element = formArray[i];
                const alert = document.getElementById(`alert_${element.id}`)
                if (!element.value) {
                    alert.textContent = "Empty input"
                }else {
                    alert.textContent = ""
                }
            }
        }else {
            for (let i = 0; i < formArray.length; i++) {
                const element = formArray[i];
                const alert = document.getElementById(`alert_${element.id}`)
                alert.textContent = ""
            }
        }
        if (password.value.length < 8 && password.value.length > 0) {
            const alert = document.getElementById("alert_password")
            alert.textContent = "Password need 8 or more characters"
        }

        stopLoading(btn.id, textSignIn);
        return false;
    }
    fetch("/users/get-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email.value,
            passwordServer: password.value
        })
    }).then(function (response) {
        if (response.ok) {
            response.json().then(json => {
                sessionStorage.EMAIL_USER = json.email;
                sessionStorage.NAME_USER = json.name;
                sessionStorage.ID_USER = json.id;
                setTimeout(function () {
                    stopLoading(btn.id, textSignIn);
                    window.location = "../game/game.html";
                }, 1000);
            });
        } else {
            response.text().then(text => {
                stopLoading(btn.id, textSignIn);
            });
        }
    }).catch(function (error) {
        console.log(error);
    })
});