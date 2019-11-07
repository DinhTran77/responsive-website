$(document).ready(function() {
    $(window).load(function() {
        $(".flexslider").flexslider();
    });
});

// Slick nav

$(function() {
    $("#menu").slicknav();
});

// $(function() {
//     $('a[href*="#"]:not([href="#"])').click(function() {
//         if (
//             location.pathname.replace(/^\//, "") ==
//                 this.pathname.replace(/^\//, "") &&
//             location.hostname == this.hostname
//         ) {
//             var target = $(this.hash);
//             target = target.length
//                 ? target
//                 : $("[name=" + this.hash.slice(1) + "]");
//             if (target.length) {
//                 $("html, body").animate(
//                     {
//                         scrollTop: target.offset().top
//                     },
//                     700
//                 );
//                 return false;
//             }
//         }
//     });
// });

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
$(function() {
    $(window).scroll(function() {
        // set distance user needs to scroll before we fadeIn navbar
        if ($(this).scrollTop() > 100) {
            $("#mainNav").css("background-color", "#000");
            $("#mainNav").css(
                "box-shadow",
                "0px -6px 5px 7px rgba(0,0,0,0.75)"
            );
        } else {
            $("#mainNav").css("background-color", "transparent");
            $("#mainNav").css("box-shadow", "none");
        }
    });
});
