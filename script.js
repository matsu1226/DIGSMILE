$(function(){
    $('.hbg-menu-icon').on('click',function(){
        $('.hbg-bar').toggleClass('close');
        $('.hbg-menu').fadeToggle(500);
        $('body').toggleClass('noscroll');
    })
})