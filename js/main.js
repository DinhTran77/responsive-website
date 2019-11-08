$(document).ready(function() {
    //Carousal
    $(".flexslider").flexslider();

    // Slick nav
    $("#menu").slicknav({ label: "" });

    // Back to Top button
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
    $(window).on("scroll", function() {
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
