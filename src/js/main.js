import { Menu, toggleHeader, backToTop, smoothScroll } from "./global.js";
import { Validation } from "./validation.js";
 
// header
let m = new Menu("hamburger--spin-r");
m.toggleMenu();
toggleHeader();
backToTop();

// smooth scroll
smoothScroll();

// parallax
let rellax = new Rellax(".rellax");

// animate on scroll
AOS.init();

// validation
let v = new Validation();
v.isValid("#name", /^[a-z ,.'-]+$/i);
v.isValid("#email", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
v.isValid("#message", /^\s*\S+.*/);

// carousel
$(".carousel").slick({
    autoplay: true,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false
});