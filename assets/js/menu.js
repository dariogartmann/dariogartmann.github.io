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
});
