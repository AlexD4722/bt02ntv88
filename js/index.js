let btn__extend = document.querySelector("#btn-extend--electronics");

let menu__extend__electronics = document.querySelector("#menu__extend__electronics");
let btn__extend__menu = document.querySelector('.bi-list');
let body__main = document.querySelector('body');
let extend__menu = document.querySelector('.menu-extend ');
let close__menu = document.querySelector('.bi-x-circle');
let btn__toggle = document.querySelector('.btn-toggle');
let btn__toggle__green = document.querySelector('.btn-toggle__left');
let price__freelance = document.querySelector('.price-freelance');
let price__startup = document.querySelector('.price-start-up');
console.log(price__freelance);
console.log(price__startup);

let btn__navbar = document.querySelector('#nav-icon');
function openNavbar(){
    btn__navbar.classList.remove("bi-list");
    btn__navbar.classList.add("bi-x-circle");
    extend__menu.style.transform = "translateX(0%)";
    extend__menu.style.opacity = "1";
    close__menu.style.display = "block";
}
function closeNavbar(){
    btn__navbar.classList.remove("bi-x-circle");
    btn__navbar.classList.add("bi-list");
    extend__menu.style.transform = "translateX(100%)";
    extend__menu.style.opacity = "0";
    close__menu.style.display = "none";
}
btn__navbar.onclick = function(){
    if(extend__menu.style.transform !==  "translateX(0%)"){
        openNavbar();
    }else{
        closeNavbar();
    }
}
btn__toggle.onclick = function(){
    if( btn__toggle__green.style.transform !== "translateX(140%)"){
        btn__toggle__green.style.transform = "translateX(140%)"
        price__freelance.innerHTML = "299"
        price__startup.innerHTML = "449"
    }else{
        btn__toggle__green.style.transform = "translateX(0%)"
        price__freelance.innerHTML = "29"
        price__startup.innerHTML = "49"
    }
    
}

