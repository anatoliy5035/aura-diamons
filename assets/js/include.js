
jQuery(document).ready(function($){
    //init slick slider
    $('.slider').slick({
            dots: true
        });
    $('.testimonials__slider').slick({
            dots: true
        });
    //init validate
    $(".registration-form").validate({
        rules: {

        }
    });
    $.validator.messages.required = '';
    $.validator.messages.email = '';
    $.validator.messages.digits = '';

    $("#phone").mask('(099)-099-99-99');

    //modal popup
    $('.js-open-modal').on('click',function(e){
        $('.modal').css('display','block');
        setTimeout(function(){
            $(".modal").addClass('fade');
        }, 10);
        $('body').css('overflow','hidden');
    });
    $('.modal-close').on('click',function(e){
        $('.modal').removeClass('fade');
        setTimeout(function(){
            $('.modal').css('display','none');
            $('body').css('overflow','visible');
        }, 200);

    })
});







