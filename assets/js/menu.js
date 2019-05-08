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
                $('.modal').css('top', 'calc(-100% - 75px)');
                setTimeout(function() {
                    $('.menu-item').removeClass('fade-in');
                    $('.social').toggleClass('fade-in');
                }, 400);
                isMenuOpen = false;
                break;
            case false:
                $('.modal').css('top', '0');
                $('.social').toggleClass('fade-in');
                var itemCount = $('.menu-item').length;
                $($('.menu-item').get().reverse()).each(function(i){
                    setTimeout(function(){
                        $('.menu-item').eq(itemCount - (i + 1)).addClass('fade-in');
                    }, 100 * (i + 1));
                });

                isMenuOpen = true;
                break;
            default:
                break;
        }
    }

    /*
    var $banner = $('.navbar');
    var $win = $(window);
    var winH = $win.height();

    $win.on("scroll", function () {
        if ($(this).scrollTop() >= 277) {
            $banner.addClass("sticky");
        } else {
            $banner.removeClass("sticky");
        }
    }).on("resize", function(){ 
       winH = $(this).height(); 
    });
    */

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var imgPos = scrollTop / 2 + 'px';
        $('main').find('.image-header').css('transform', 'translateY(' + imgPos + ')');
    });

    var isMobile = window.matchMedia("only screen and (max-width: 760px)");

    if (isMobile.matches) {
        $('.carousel-video').remove();
    }
});