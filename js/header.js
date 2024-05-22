window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("down",window.scrollY>0);
})


function toggleMenu() {
    var menu = document.querySelector('header nav');
    menu.classList.toggle('show');
}
