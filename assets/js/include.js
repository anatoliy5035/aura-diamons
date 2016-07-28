
jQuery(document).ready(function($){
    //init slick slider
    $('.slider').slick({
            dots: true
        });
    $('.testimonials__slider').slick({
            dots: true
        });

    //init validate
    $.validator.messages.required = '';
    $.validator.messages.email = '';
    $.validator.messages.digits = '';

    $("#phone").mask('(099)-099-99-99');

    //animate scroll

    $('.js-scroll-to').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });

    //modal popup
    $('.js-open-modal').on('click',function(e){
        $('.modal').css('display','block');
        setTimeout(function(){
            $(".modal").addClass('fade');
        }, 10);
        $('body').css('overflow','hidden');
    });
    $('.js-close').on('click',function(e){
        $('.modal').removeClass('fade');
        setTimeout(function(){
            $('.modal').css('display','none');
            $('body').css('overflow','visible');
        }, 200);

    });

    //ajax form
        var thanks = $('.js-thanks-modal');
        $('.registration-form').validate({
            submitHandler: function(form) {
                var data = $('.registration-form').serialize();
                $.post(
                    'mail.php',
                    data,
                    function(data) {
                        $('.modal').css('display','none');
                        $('body').css('overflow','visible');
                        thanks.fadeIn(300);
                        setTimeout(function () {
                            thanks.fadeOut(300);
                        }, 5000);
                        $(".registration-form").trigger("reset");
                        return false;
                    }).fail(function() {
                        //imitalion on github
                        $('.modal').css('display','none');
                        $('body').css('overflow','visible');
                        thanks.fadeIn(300);
                        setTimeout(function () {
                            thanks.fadeOut(300);
                        }, 5000);
                        $(".registration-form").trigger("reset");
                        return false;
                    });

            }

        });

    $('.js-close-thank').on('click',function(e){
        $('.modal-thank').css('display','none');

    });

});







