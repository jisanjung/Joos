import { Menu, toggleHeader, backToTop, smoothScroll } from "./global.js";

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