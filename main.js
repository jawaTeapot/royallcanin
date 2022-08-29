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
});