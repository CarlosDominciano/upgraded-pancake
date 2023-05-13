const body = document.getElementsByTagName("body")[0]
const leaveSession = document.getElementById("leave_session")

body.onload = () => {
    // validateSession()
}

leaveSession.addEventListener('click', () => {
    cleanSession()
})

function validateSession() {
    const email = sessionStorage.EMAIL_USER;
    const name = sessionStorage.NAME_USER;
    const b_usuario = document.getElementById("b_usuario");

    if (email != null && name != null) {
        b_usuario.innerHTML = name;
        return true;
    }
    cleanSession()
    return false;
}

function cleanSession() {
    sessionStorage.clear();
    window.location = "../main/main.html";
}
