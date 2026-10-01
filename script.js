const menuButton = document.querySelector("#menuButton");
const closeButton = document.querySelector("#closeButton");
const menu = document.querySelector("#menu");

const servicesButton = document.querySelector(".dark-button");

const consultationButtons =
    document.querySelectorAll(".gold-button");

const phoneButton =
    document.querySelector(".phone-button");

const whatsappButton =
    document.querySelector(".whatsapp-button");

const menuLinks =
    document.querySelectorAll(".menu a");


// ОТКРЫТЬ МЕНЮ

menuButton.addEventListener("click", function() {

    menu.classList.add("active");

});


// ЗАКРЫТЬ МЕНЮ

closeButton.addEventListener("click", function() {

    menu.classList.remove("active");

});


// ЗАКРЫТЬ МЕНЮ ПОСЛЕ НАЖАТИЯ НА ПУНКТ

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        menu.classList.remove("active");

    });

});


// КНОПКА «ҚЫЗМЕТТЕР»

servicesButton.addEventListener("click", function() {

    document.querySelector("#services").scrollIntoView({
        behavior: "smooth"
    });

});


// КНОПКИ «КЕҢЕС АЛУ»

consultationButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        document.querySelector("#contacts").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ТЕЛЕФОН

phoneButton.addEventListener("click", function() {

    window.location.href = "tel:+77022031777";

});


// WHATSAPP

whatsappButton.addEventListener("click", function() {

    window.open(
        "https://wa.me/77022031777",
        "_blank"
    );

});