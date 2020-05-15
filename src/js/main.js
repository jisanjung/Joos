import { Menu } from "./Menu.js";

let m = new Menu("hamburger--spin-r");
const hamburger = document.querySelector(".hamburger");

hamburger.classList.add(m.getType());

hamburger.addEventListener("click", function() {
    if (this.classList.contains("is-active")) {
        this.classList.remove("is-active");
    } else {
        this.classList.add("is-active");
    }
});