const navbar = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");

window.onscroll = function(){
    scrollY === 0 ? navbar.classList.add("top") : navbar.classList.remove("top");
}

hamburger.onclick = function(){
    navbar.classList.toggle("open");
};