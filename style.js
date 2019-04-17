$(document).ready(function () {
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
        if (this.hash !== "") {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                window.location.hash = hash;
            });
        }
    });
});
$(window).scroll(function () {
    $(".slideanim").each(function () {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
});

/***Change navbar color on scroll***/
$(document).on('scroll', function () {
    if ($(window).width() > 992) {
        var rgba = $(document).scrollTop() / 700;
        $('.navbar').css('background-color', 'rgba(36,54,63,' + rgba + ')');
    }
});

/***Change the image on the portfolio when hover***/
jQuery(function ($) {
    $("#space").hover(function () {
        $("#one").toggleClass("spacify");
    });
});
jQuery(function ($) {
    $("#cookie").hover(function () {
        $("#one").toggleClass("cookiefy");
    });
});
jQuery(function ($) {
    $("#sumo").hover(function () {
        $("#one").toggleClass("sumofy");
    });
});
jQuery(function ($) {
    $("#alexa").hover(function () {
        $("#one").toggleClass("alexafy");
    });
});
jQuery(function ($) {
    $("#pilldispenser").hover(function () {
        $("#one").toggleClass("dispensery");
    });
});