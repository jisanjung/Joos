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

export function backToTop() {
    window.addEventListener("scroll", () => {
        let currPosition = window.pageYOffset;
        const button = document.querySelector(".back-to-top");

        currPosition > 1000 ? button.style.right = "30px" : button.style.right = "-38px";
    });
}

function mediaQuery(size) {
    if (window.matchMedia(`(min-width: ${size}px)`).matches) {
        return true;
    } else {
        return false;
    }
}

export function smoothScroll() {   
    // smooth scroll
    $('a[href*=\\#]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
}