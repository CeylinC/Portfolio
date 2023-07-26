const navbar = document.querySelector("nav");

window.onscroll = function(){
    scrollY === 0 ? navbar.classList.add("top") : navbar.classList.remove("top");
}