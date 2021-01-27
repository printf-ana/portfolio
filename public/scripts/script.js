$(function(){

    var jElement = $('.element');

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 300 ){
            jElement.css({
                'position':'fixed',
                'top':'300px'
            });
        }else{
            jElement.css({
                'position':'relative',
                'top':'auto'
            });
        }
    });

});
