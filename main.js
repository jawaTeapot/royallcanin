$(document).ready(function(){

    $('#registration').slick({
        dots: true,
    });

    const $services = $('#services');
    const $slideCount = $('#slide-count');

    $services.on('init reInit afterChange', function(event, slick, currentSlide){
        const i = (currentSlide ? currentSlide : 0) + 1;
        $slideCount.text(i + '/' + slick.slideCount);
    });

    $services.slick({
        infinite: false,
        prevArrow: $('#prev-arrow'),
        nextArrow: $('#next-arrow')
    });

    const $gifts = $('#gifts');
    const $countSlide = $('#count-slide');

    $gifts.on('init reInit afterChange', function(event, slick, currentSlide){
        const i = (currentSlide ? currentSlide : 0) + 1;
        $countSlide.text(i + '/' + slick.slideCount);
    });

    $gifts.slick({
        infinite: false,
        prevArrow: $('#prev-arrow'),
        nextArrow: $('#next-arrow')
    });

    $('#tabs .store__top-tab').on('click', function () {
        $('#tabs .store__top-tab').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        $('.' + $(this).data().tab).show();
        setTimeout(function () {
            $gifts.slick('refresh');
        }, 100);
    })
});
