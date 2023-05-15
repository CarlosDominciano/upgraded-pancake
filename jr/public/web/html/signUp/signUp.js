const form = document.getElementById("form_sign_up")
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const btn = document.getElementById("btn_sign_up")
    const icon = '<ion-icon name="cloud-upload"></ion-icon>'
    const textSignUp = "Sign Up"
    loading(btn.id, icon);

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("confirm_password")
    const formArray = [name, email, password, confirmPassword]

    if (
        (!name.value || !email.value || !password.value || !confirmPassword.value)
        || (password.value.length < 8 && password.value.length > 0)
        || (confirmPassword.value != password.value && confirmPassword.value.length > 0)) {
        if (!name.value || !email.value || !password.value || !confirmPassword.value) {
            for (let i = 0; i < formArray.length; i++) {
                const element = formArray[i];
                const alert = document.getElementById(`alert_${element.id}`)
                if (!element.value) {
                    alert.textContent = "Empty input"
                }else {
                    alert.textContent = ""
                }
            }
        }
        if (password.value.length < 8 && password.value.length > 0) {
            const alert = document.getElementById("alert_password")
            alert.textContent = "Password too weak"
        }
        if (confirmPassword.value != password.value && confirmPassword.value.length > 0) {
            const alert = document.getElementById("alert_confirm_password")
            alert.textContent = "Passwords do not match"
        }
        
        stopLoading(btn.id, textSignUp);
        return false;
    } else {
        for (let i = 0; i < formArray.length; i++) {
            const element = formArray[i];
            const alert = document.getElementById(`alert_${element.id}`)
            alert.textContent = ""
        }
        fetch("/users/post-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nameServer: name.value,
                emailServer: email.value,
                passwordServer: password.value
            })
        }).then(function (response) {
            if (response.ok) {
                setTimeout(() => {
                    stopLoading(btn.id, textSignUp);
                    window.location = "../signIn/signIn.html";
                }, 2000)
            } else {
                throw ("Error to create user!");
            }
        }).catch(function (response) {
            stopLoading(btn.id, textSignUp);
        });
        return false;
    }
});