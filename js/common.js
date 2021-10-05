// ----------------左边下拉--------------------
$('.submenu').eq(0).hover(function(){
    var path = $('.logo img').attr('logo-path-two')
    $('.logo img').attr('src',path)
    $('header').toggleClass('mouseenter')
    $('.docker-container').css('display', 'block')
    $('.docker-container-selection').stop().slideDown(300).siblings().hide();
},function(){
    var path = $('.logo img').attr('logo-path-one')
    $('.logo img').attr('src',path)
    $('header').toggleClass('mouseenter')
    $('.docker-container').css('display', 'none')
    $('.docker-container-selection').css('display', 'none')
})
$('.submenu').eq(1).hover(function(){
    var path = $('.logo img').attr('logo-path-two')
    $('.logo img').attr('src',path)
    $('header').toggleClass('mouseenter')
    $('.docker-container').css('display', 'block')
    $('.docker-container-product').stop().slideDown(300).siblings().hide();
},function(){
    var path = $('.logo img').attr('logo-path-one')
    $('.logo img').attr('src',path)
    $('header').toggleClass('mouseenter')
    $('.docker-container').css('display', 'none')
    $('.docker-container-product').css('display', 'none')
})
$('.submenu').eq(2).hover(function(){
    var path = $('.logo img').attr('logo-path-two')
    $('.logo img').attr('src',path)
    $('header').toggleClass('mouseenter')
    $('.docker-container').css('display','block')
    $('.docker-container-support').stop().slideDown(300).siblings().hide();
},function(){
    var path = $('.logo img').attr('logo-path-one')
    $('.logo img').attr('src',path)
    $('header').toggleClass('mouseenter')
    $('.docker-container').css('display', 'none')
    $('.docker-container-selection').css('display', 'none')
})
// -------------------二级----------------------
$('.docker-container-selection').hover(function(){
    var path = $('.logo img').attr('logo-path-two')
    $('.logo img').attr('src',path)
    $('header').toggleClass('mouseenter')
    $('.docker-container').css('display','block')
    $('.docker-container-selection').css('display','block')
},function(){
    var path = $('.logo img').attr('logo-path-one')
    $('.logo img').attr('src',path)
    $('header').toggleClass('mouseenter')
    $('.docker-container').css('display', 'none')
    $('.docker-container-product').css('display', 'none')
})
$('.docker-container-product').hover(function(){
    var path = $('.logo img').attr('logo-path-two')
    $('.logo img').attr('src',path)
    $('header').toggleClass('mouseenter')
    $('.docker-container').css('display','block')
    $('.docker-container-product').css('display','block')
},function(){
    var path = $('.logo img').attr('logo-path-one')
    $('.logo img').attr('src',path)
    $('header').toggleClass('mouseenter')
    $('.docker-container').css('display','none')
    $('.docker-container-product').css('display','none')
})
$('.docker-container-support').hover(function(){
    var path = $('.logo img').attr('logo-path-two')
    $('.logo img').attr('src',path)
    $('header').toggleClass('mouseenter')
    $('.docker-container').css('display','block')
    $('.docker-container-support').css('display','block')
},function(){
    var path = $('.logo img').attr('logo-path-one')
    $('.logo img').attr('src',path)
    $('header').toggleClass('mouseenter')
    $('.docker-container').css('display','none')
    $('.docker-container-support').css('display','none')
})
// -------------右边下拉----------------
$('.site-assistant').hover(function(){    var path = $('.assistant-switch').find('img').attr('data-icon-close')
    $('.assistant-switch').find('img').attr('src', path)
    $(this).find('ul').show(300)
}, function() {
    var path = $('.assistant-switch').find('img').attr('data-icon-open')
    $('.assistant-switch').find('img').attr('src', path)
    $(this).find('ul').hide(300)
})
$('.assistant-banner').parent().hover(function() {
    $('.assistant-banner-pop').css('display', 'block')
}, function() {
    $('.assistant-banner-pop').css('display', 'none')
})
$('.assistant-wechat').parent().hover(function() {
    $('.assistant-wechat-pop').css('display', 'block')
}, function() {
    $('.assistant-wechat-pop').css('display', 'none')
})