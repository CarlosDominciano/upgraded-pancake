const body = document.getElementsByTagName("body")[0]
const leaveSession = document.getElementById("leave_session")

body.onload = () => {
    // validateSession()
}

leaveSession.addEventListener('click', () => {
    cleanSession()
})

function validateSession() {
    const email = sessionStorage.EMAIL_USER
    const name = sessionStorage.NAME_USER
    const userName = document.getElementById("user")

    if (email != null && name != null) {
        userName.textContent = name
        return true
    }
    cleanSession()
    return false
}

function cleanSession() {
    alert(`${sessionStorage.NAME_USER}, with great power comes great responsibility.`)
    sessionStorage.clear()
    window.location = "../main/main.html"
}
