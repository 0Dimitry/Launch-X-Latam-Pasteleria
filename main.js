const nav = document.querySelector("#navBar");
const Abrir = document.querySelector("#btnAbrir");
const Cerrar = document.querySelector("#btnCerrar");

Abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

Cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})