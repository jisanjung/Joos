import { Menu } from "./global.js";

// header
let m = new Menu("hamburger--spin-r");
m.toggleMenu();

// parallax
let rellax = new Rellax(".rellax");

// animate on scroll
AOS.init();