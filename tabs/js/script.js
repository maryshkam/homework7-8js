$(function() {
    var $text = $('.tabs__text');
    var $title = $('.tabs__title');

    $text.not(":first").hide();

    $title.on('click', function() {
        $title.removeClass("active"); 
        $(this).addClass("active"); 
        $text.hide();
        var $selectId = $(this).attr('href');
        $($selectId).fadeIn();
    })
})