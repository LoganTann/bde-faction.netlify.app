function mainPageScript() {
    const photosMembres = document.querySelectorAll('#membres .avatar img');
    const materialBoxInstance = M.Materialbox.init(photosMembres, {});
}


// /index.html
document.addEventListener("DOMContentLoaded", mainPageScript);
