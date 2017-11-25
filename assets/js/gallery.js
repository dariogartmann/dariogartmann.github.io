var $grid = $('.grid').masonry({
    itemSelector: '.item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 25
});

$grid.imagesLoaded().progress(function() {
    $grid.masonry('layout');
});
