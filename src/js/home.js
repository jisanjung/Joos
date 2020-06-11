// for home page only

if (window.location.pathname == "/index.html" || window.location.pathname == "/") {
    
    // carousel
    $(".carousel").slick({
        autoplay: true,
        dots: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false
    });
}