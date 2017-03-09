$(function() {
    var $tips = $('.tips');
    var $input = $('.enterfield');
    var $help = $('.showAll');
    $tips.hide();
    $input.hover(

        function() {
            var $select = $(this).attr('href');
            $($select).animate({
                height: "toggle"
            });
        },
        function() {
            var $select = $(this).attr('href');
            $($select).animate({
                width: "toggle"
            });
        }
    )
    
})