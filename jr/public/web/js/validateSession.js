const leaveSession = document.getElementById("leave_session")
let onGame = false;

leaveSession.addEventListener('click', () => {
    cleanSession()
})

function validateSession() {
    const email = sessionStorage.EMAIL_USER
    const name = sessionStorage.NAME_USER

    if (email != null && name != null) {
        return true
    }
    cleanSession()
    return false
}

function cleanSession() {
    if (!onGame) {
        if (sessionStorage.NAME_USER == undefined) {
            window.location = "../main/main.html"
        } else {
            alert(`${sessionStorage.NAME_USER}, with great power comes great responsibility.`)
            sessionStorage.clear()
            window.location = "../main/main.html"
        }
    } else {
        alert("Click in 'Leave' button again to log out.")
        onGame = false;
    }
}
