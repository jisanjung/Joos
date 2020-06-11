// Menu
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

// open or close the mobile nav
function nav(state) {
    if (state) {
        mobileNav.style.right = "0px";
    } else if (!state) {
        mobileNav.style.right = "-236px";
    }
}

export class Menu {
    constructor(type) {
        this.type = type;
    }

    toggleMenu() {
        hamburger.classList.add(this.type);

        hamburger.addEventListener("click", function() {
            if (this.classList.contains("is-active")) {
                this.classList.remove("is-active");
                nav(false);
            } else {
                this.classList.add("is-active");
                nav(true);
            }
        });
    }
}

export class Header {
    scrolled() {
        let prevPosition = window.pageYOffset;
        let header = document.querySelector("header");

        window.addEventListener("scroll", () => {
            let currPosition = window.pageYOffset;

            if (mediaQuery(1024)) {
                if (currPosition == "0") {
                    header.style.background = "transparent";
                    header.classList.remove("header-active");
                }
            }
            
            if (prevPosition > currPosition) {
                header.style.top = "0";
            } else {
                header.style.top = `-${header.offsetHeight}px`;
                header.style.background = "#fff";
                header.classList.add("header-active");
            }
            prevPosition = currPosition;
        });
    }
}

function mediaQuery(size) {
    if (window.matchMedia(`(min-width: ${size}px)`).matches) {
        return true;
    } else {
        return false;
    }
}