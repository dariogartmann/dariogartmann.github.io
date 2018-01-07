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