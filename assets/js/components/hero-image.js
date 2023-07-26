const hero = document.getElementById("hero"),
    mainPage = document.getElementById("main-page"),
    detail = document.getElementById("detail"),
    nextButton = document.getElementById("next-slider-button"),
    prevButton = document.getElementById("prev-slider-button");

function changeWebsite() {
    if (hero.classList.contains("main")) {
        detail.style.display = "none";
    }
    else {
        detail.style.display = "block";
    }
}

nextButton.onclick = function(){
    if(hero.classList.contains("main")){
        hero.classList.remove("main");
        hero.classList.add("coder");
        nextButton.style.display = "none";
        prevButton.innerHTML = '<i class="fa-solid fa-house"></i>';
    }
    else if(hero.classList.contains("designer")){
        hero.classList.remove("designer");
        hero.classList.add("main");
        prevButton.style.display = "block";
        nextButton.innerHTML = '<i class="fa-solid fa-code"></i>';
    }
    changeWebsite();
}

prevButton.onclick = function(){
    if(hero.classList.contains("coder")){
        hero.classList.remove("coder");
        hero.classList.add("main");
        nextButton.style.display = "block";
        prevButton.innerHTML = '<i class="fa-solid fa-paintbrush"></i>';
    }
    else if(hero.classList.contains("main")){
        hero.classList.remove("main");
        hero.classList.add("designer");
        prevButton.style.display = "none";
        nextButton.innerHTML = '<i class="fa-solid fa-house"></i>';
    }
    changeWebsite();
}

changeWebsite();