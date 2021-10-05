// 不能放入load事件事件中，这个方法要在ready加载。
(function(w) {
    w.getPage8Data = function getPage8Data(id) {
        var data = [{
                id: 'q9',
                title: 'Q9智能一体机',
                name: 'HCE900A01',
                detail: 'dB7ImgQ9.png',
                tianMao: true,
            },
            {
                id: 'q10',
                title: 'Q10智能一体机',
                name: 'HCE805A01',
                detail: 'dB7ImgQ10.png',
                tianMao: false,
            },
            {
                id: 'q8',
                title: 'Q8智能一体机',
                name: 'HCE800A01',
                detail: 'dB7ImgQ8.png',
                tianMao: true,
            },
            {
                id: 'qlight',
                title: 'Qlight智能一体机',
                name: 'HCE810A01',
                detail: 'dB7ImgQlight.png',
                tianMao: false,
            },
            {
                id: 'q3',
                title: 'Q3智能一体机',
                name: 'HCE810A01',
                detail: 'dB7ImgQ3.png',
                tianMao: false,
            },
            {
                id: 'q8plus',
                title: 'Q8 Plus智能一体机',
                name: 'HCE811A01',
                detail: 'dB7ImgQ8plus.png',
                tianMao: false,
            },
        ]
        return data.filter(function(v, i) {
            return v.id == id;
        })
    }
    return w
})(window);

// 此处必须使用load事件，不能使用ready事件。因为ready事件加载不完整，对于计算不精准。
$(window).on('load', function() {
    // page1
    // 初始化宽度
    $('.move-ceil').width($('.move-line').offset().left);

    // page2
    $('.innerVideo').hover(function() {
            $(this).find('video')[0].play();
            $(this).next().find('.videoArrow img').fadeIn();
            // $('.videoArrow img').fadeIn();
        }, function() {
            $(this).find('video')[0].pause();
            $(this).next().find('.videoArrow img').fadeOut();
        })
        // page3切换动画
    $('.page3 .itemIcon').click(function() {
            var _this = this;
            // 动画切换
            $('.dB2Bg .dB2Animate').each(function(i, v) {
                if (i == $(_this).parent().index()) {
                    $(v).show();
                } else {
                    $(v).hide();
                }
            })
        })
        // page5切换动画
    $('.page5 .itemIcon').click(function() {
            var index = $(this).parent().index() ? 0 : 1;
            $('.page5 .page5Bg').children().eq(index).show().siblings().hide();
        })
        // 手风琴
    $('.itemIcon').click(function() {
        // 手风琴切换
        $(this).next().addClass('active1').parent().siblings().children('p').removeClass('active1')
            // 图片切换
        $(this).children()[0].src = $(this).children()[0].src.replace('IconG', 'IconB');
        $(this).parent().siblings().find('img').each(function() {
            this.src = this.src.replace('IconB', 'IconG');
        })
    })
})