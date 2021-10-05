// 导航
function fun(ele, twoele) {
    $(ele).hover(function() {
        $("nav").addClass("active");
        $('.mylist li>a').css({
            "color": "#666666"
        })
        $(twoele).slideDown();
    }, function() {
        $("nav").removeClass("active");
        $('.mylist li>a').css({
            "color": "#fff"
        })
        $(twoele).slideUp();
    });
    $(twoele).mouseover(function() {
        $("nav").addClass("active");
        $('.mylist li>a').css({
            "color": "#666666"
        })
        $(this).stop();
    });
    $(twoele).mouseout(function() {
        $("nav").removeClass("active");
        $('.mylist li>a').css({
            "color": "#fff"
        })
        $(this).slideUp();
    })
};
fun('.startoggle', '.star');
fun('.protoggle', ".row2");
fun('.tesetoggle', ".tese");
// 固定导航
$('.sanjiaoimg').mouseenter(function() {
    $(".mask").slideDown();
    $('.sanjiaonav').slideDown();
});
$('.sanjiaoimg').mouseleave(function() {
    $(".mask").slideUp();
    $('.sanjiaonav').slideUp();
});

//恒洁畅销榜单
$('.danleftbox>.col-md-6').hover(function() {
    $(this).find(".topmask").fadeIn(500);
}, function() {
    $(this).find(".topmask").fadeOut(500);
})


// 智能一体
$('#feedlist li').hover(function() {
    $(this).find("ul").slideDown();
}, function() {
    $(this).find('ul').slideUp(2000);
});
//关注我们微信
$('.weixin').hover(function() {
    $(".lastwei").fadeIn();
}, function() {
    $(".lastwei").fadeOut();
});
// 回到顶部
var backTop = $(".feedomnavbox").offset().top;
console.log(backTop);
$(window).scroll(function() {
    if ($(window).scrollTop() > backTop) {
        $('.back-top').show();
    } else {
        $('.back-top').hide();
    }
});
$('.back-top').click(function() {
    $("html").animate({
        scrollTop: 0
    }, 2000)
})