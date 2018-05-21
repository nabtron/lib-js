$(document).ready(function() {
    $(window).on("scroll", function() {
    
        // sticky header code
        if ($(window).scrollTop() > 100) {
            $(".header").addClass("has-scroll");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".header").removeClass("has-scroll");
            
        }
    });
});
