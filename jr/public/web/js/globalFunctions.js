const nameUser = sessionStorage.NAME_USER;
const title = document.title

function loading(id, icon) {
    const loading = document.getElementById(id)
    loading.innerHTML = icon
}

function stopLoading(id, text) {
    const loading = document.getElementById(id)
    loading.innerHTML = text
}

document.addEventListener("visibilitychange", function() {
    titleFocus(title)
});

function titleFocus(title) {
    if (document.visibilityState === 'visible') {
      document.title = title
    } else if (!nameUser) {
        document.title = "Spider sense is tingling!"
    } else {
      document.title = "We are Venom!"
    }
}