const form = document.getElementById("form_sign_up")
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("confirm_password")
    const formArray = [name, email, password, confirmPassword]
    const emailDatabase = "aaa@aaa";

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
    }else {
        for (let i = 0; i < formArray.length; i++) {
            const element = formArray[i];
            const alert = document.getElementById(`alert_${element.id}`)
            alert.textContent = ""
        }
    }
    if (password.value.length < 8 && password.value.length > 0) {
        const alert = document.getElementById("alert_password")
        alert.textContent = "Password too weak"
    }
    if (confirmPassword.value != password.value && confirmPassword.value.length > 0) {
        const alert = document.getElementById("alert_confirm_password")
        aler.textContent = "Passwords do not match"
    }

    if(email.value == emailDatabase) {
        const alert = document.getElementById("alert_email")
        alert.textContent = "Email already exists"
        return;
    }
});