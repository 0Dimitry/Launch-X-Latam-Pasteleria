const nav = document.querySelector("#navBar");
const Abrir = document.querySelector("#btnAbrir");
const Cerrar = document.querySelector("#btnCerrar");

Abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

Abrir.addEventListener("scroll", function(event){
    event.preventDefault();
    Abrir.scrollTop=0;
}, false);

Cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})