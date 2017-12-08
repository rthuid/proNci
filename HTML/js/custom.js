$(document).ready(function () {
    /****-- sub-menu --****/
    $(document).on('click', '.sub-menu > i' , function () {
        $(this).each(function () {
            $(this).siblings('ul.sub-list').first().slideToggle(100);
            $(this).parent('li.sub-menu').toggleClass('open');
            $(this).parent('li.sub-menu').siblings('.open').children('ul.sub-list').slideToggle(100);
            $(this).parent('li.sub-menu').siblings('.open').removeClass('open');

        })
    });
    /****-- /sub-menu --****/
    
});