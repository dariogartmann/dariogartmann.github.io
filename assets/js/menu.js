$(document).ready(function(){
    var isMenuOpen = false;

    // listener
    $('.menu-icon').on('click', function(e) {
        e.preventDefault();
        toggleMenu();
    });

    $('.close-menu, .modal').on('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // toggle
    function toggleMenu() {
        switch(isMenuOpen) {
            case true:
                $('.modal').css('top', '-100%');
                isMenuOpen = false;
                break;
            case false:
                $('.modal').css('top', '0');
                isMenuOpen = true;
                break;
            default:
                break;
        }
    }

    var $banner = $('.navbar');
    var $win = $(window);
    var winH = $win.height();

    $win.on("scroll", function () {
        if ($(this).scrollTop() >= 325) {
            $banner.addClass("sticky");
        } else {
            $banner.removeClass("sticky");
        }
    }).on("resize", function(){ 
       winH = $(this).height(); 
    });
});