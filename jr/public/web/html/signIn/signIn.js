const form = document.getElementById("form_sign_in")
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const formArray = [email, password]
    const emailDatabase = "";

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

    if(email.value != emailDatabase) {
        const alert = document.getElementById("alert_email")
        alert.textContent = "Email don't exists"
        return;
    }
});