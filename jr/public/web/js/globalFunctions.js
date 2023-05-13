function loading(id, icon) {
    const loading = document.getElementById(id);
    loading.innerHTML = icon;
}

function stopLoading(id, text) {
    const loading = document.getElementById(id);
    loading.innerHTML = text;
}

const title = document.title
document.addEventListener("visibilitychange", function() {
    titleFocus(title);
});

function titleFocus(title) {
    if (document.visibilityState === 'visible') {
      document.title = title;
    } else if (title.substring(0,2) == "Si" || title.substring(0,1) == "H") {
        document.title = "Spider sense is tingling!";
    } else {
      document.title = "We are Venom!";
    }
}