$(function () {
    let burgerButtonServ = document.querySelector(".burger-button-services");
    let burgerMenuS = document.querySelector(".header__nav-services");
    burgerButtonServ.onclick = function (e) {
        burgerButtonServ.classList.toggle("burger-button--active");
        burgerMenuS.classList.toggle("header__nav-services--active");
    }
});