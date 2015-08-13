// When scrolling, make the navbar smaller and opaque
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("navbarsmall");
    } else {
        $(".navbar-fixed-top").removeClass("navbarsmall");
    }
});