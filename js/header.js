window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("down",window.scrollY>0);
})


const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("nav");
const btnCerrar = document.querySelector("#btn-cerrar");
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener("click", () => {
    nav.classList.add("nav-active")
    overlay.classList.add('active');
})
btnCerrar.addEventListener("click", () => {
    nav.classList.remove("nav-active")
    overlay.classList.remove('active');
});
overlay.addEventListener("click", () => {
    nav.classList.remove("nav-active")
    overlay.classList.remove('active');
});