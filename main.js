$(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
                if (
                        location.pathname.replace(/^\//, "") ==
                                this.pathname.replace(/^\//, "") &&
                        location.hostname == this.hostname
                ) {
                        var target = $(this.hash);
                        target = target.length
                                ? target
                                : $("[name=" + this.hash.slice(1) + "]");
                        if (target.length) {
                                $("html, body").animate(
                                        {
                                                scrollTop: target.offset().top
                                        },
                                        700
                                );
                                return false;
                        }
                }
        });
});

$(window).load(function() {
        $(".flexslider").flexslider({
                animation: "slide"
        });
});

$("#btnUp").css("visibility", "hidden");
$(window).on("scroll", function() {
        if ($(window).scrollTop() > 600) {
                $("#btnUp").css("visibility", "visible");
                $("#btnUp").fadeIn(400);
        } else {
                $("#btnUp").fadeOut(400);
        }
});

// Fade-in Nav bar on scroll
$(document).ready(function() {
        // fade in .navbar
        $(function() {
                $(window).scroll(function() {
                        // set distance user needs to scroll before we fadeIn navbar
                        if ($(this).scrollTop() > 100) {
                                $("#mainNav").css("background-color", "black");
                        } else {
                                $("#mainNav").css(
                                        "background-color",
                                        "transparent"
                                );
                        }
                });
        });
});

var $bg;
$("#menu").slicknav({
        label: "",
        closeOnClick: true,
        duration: 100,
        init: function() {
                $bg = $(".slicknav_menu");
        },
        afterOpen: function() {
                $bg.css({ background: "#ec0857" });
        },
        afterClose: function() {
                $bg.css({ background: "transparent" });
        }
});
