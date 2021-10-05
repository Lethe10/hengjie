console.log($('.right-box div'));
$('.right-box div').click(function() {
    $('.right-box div').removeClass('selected');
    $(this).addClass('selected');
    $('.left-box video').attr('poster', $(this).find('img').attr('src'))
    $('.left-box video').attr('src', $(this).attr('data-video'));
})