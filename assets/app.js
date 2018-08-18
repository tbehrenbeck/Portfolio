/* Navbar and Parallax */
(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

    });
})(jQuery);

/* Scroll Animation */
$(document).ready(function () {
    $("#projectsLink").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;

        if ($(hash).offset()) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () { });
        }
    });
});
$(document).ready(function () {
    $("#contactLink").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;

        if ($(hash).offset()) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () { });
        }
    });
});