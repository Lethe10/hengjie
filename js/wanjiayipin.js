console.log($('.video'));
$('.video').not().click(function() {
    $('.popup').find('video').attr('src', $(this).attr('data-video'));
    $('.popup').css({ display: 'block' });
    $('.popup').find('video').trigger('play');
});
$('.popup').click(function() {
    $(this).find('video').trigger('pause');
    $(this).find('video')[0].currentTime = 0;
    $(this).find('video').attr('src', '');
    $(this).css({ display: 'none' });
});