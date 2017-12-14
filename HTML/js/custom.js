$(document).ready(function () {
    /****-- slider --****/
    $('.main_slider').bxSlider({
        auto: true,
        pager: true,
        autoHover: true,
        useCSS: false,
        controls: false,
        speed: 300,
        //        easing: 'easeInOutBack',

        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            //            console.log(currentSlideHtmlObject);
            $('.active-slide').removeClass('active-slide');
            $('.main_slider > li').eq(currentSlideHtmlObject + 1).addClass('active-slide')
        },
        onSliderLoad: function () {
            $('.main_slider > li').eq(1).addClass('active-slide')
        }
    });
    /****-- /slider --****/
    
    
    /****-- sub-menu --****/
    $(document).on('click', '.sub-menu > i', function () {
        $(this).each(function () {
            $(this).siblings('ul.sub-list').first().slideToggle(100);
            $(this).parent('li.sub-menu').toggleClass('open');
            $(this).parent('li.sub-menu').siblings('.open').children('ul.sub-list').slideToggle(100);
            $(this).parent('li.sub-menu').siblings('.open').removeClass('open');

        })
    });
    /****-- /sub-menu --****/
    
    
    /****-- nav-toggle --****/
    $(document).on('click', '.nav-toggle', function () {
        $('.main-nav').slideToggle(250);
        //closing list items
        $('.main-nav').find('.sub-menu.open > i').click();
        $(this).toggleClass('open');
    });
    /****-- /nav-toggle --****/
    
    
    /****-- banner-form-toggle --****/
    $(document).on('click', '.btn-banner-form', function () {
        $('.banner-form').toggleClass('open');
        if ($(window).width() < 768) {
            $('.banner-form-xs-toggel').slideToggle(250);
        }
    });
    //resizs in sm devices
    $(window).resize(function() {
        if ($(window).width() < 768 && $('.banner-form').hasClass('open')) {
            $('.banner-form-xs-toggel').show();
        }
    });
    /****-- /banner-form-toggle --****/
    
    


});