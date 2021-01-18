//mobile menu
let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu");
    if (mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }
})

//contact-form

let openForm=document.querySelector(".open-form");
let contactForm=document.querySelector(".contact-form");

openForm.addEventListener("click", function(){
 
    if (!contactForm.classList.contains("show")) {
        contactForm.classList.add("show");
        contactForm.classList.remove("hide");
        openForm.classList.add("hide");
    } else {
        contactForm.classList.remove("show");
    }
})  
