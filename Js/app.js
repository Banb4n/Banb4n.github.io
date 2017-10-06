$(document).ready(function() {
    $(window).scroll(function() {
        evoNavbar();
        OpacityTitle();
        NoTitle();
    })
})

function evoNavbar() {
    $window = $(window);
    $window.scroll(function() {
        if ($window.scrollTop() > 50){
            $('.navbar-default').removeClass('navbarOnTop');  
            $('.navbar-default').addClass('navbarFixed');
        } 
        else {
            $('.navbar-default').addClass('navbarOnTop');  
            $('.navbar-default').removeClass('navbarFixed');
        }
    })
}

function OpacityTitle() {
    scrollPos = $(this).scrollTop();
    $(".containerTitre").css({
        'margin-top' : (scrollPos / 10) + "px",
        'opacity': 1 - (scrollPos / 150)
    })
}

function NoTitle() {
    $window = $(window);
    $window.scroll(function() {
        if ($window.scrollTop() > 600) {
            $(".containerTitre").addClass("Hide");
        } 
        else {
            $(".containerTitre").removeClass("Hide"); 
        }
    })
}
