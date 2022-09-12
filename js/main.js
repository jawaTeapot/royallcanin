$(document).ready(function(){

    $('.custom-select').each(function() {
        const placeholder = $(this).data().placeholder;
        console.log(placeholder, )
        $(this).select2({
            minimumResultsForSearch: -1,
            allowClear: true
        });
    })

    const $services = $('#services');

    if ($services.length) {
        const $slideCount = $('#slide-count');

        $services.on('init reInit afterChange', function(event, slick, currentSlide){
            const i = (currentSlide ? currentSlide : 0) + 1;
            $slideCount.text(i + '/' + slick.slideCount);
        });

        $services.slick({
            infinite: false,
            slidesToShow: 1.2,
            prevArrow: $('#prev-arrow'),
            nextArrow: $('#next-arrow')
        });
    }

    const $gifts = $('#gifts');

    if ($gifts.length) {
        const $countSlide = $('#gift-count-slide');

        $gifts.slick({
            infinite: false,
            prevArrow: $('#gift-prev-arrow'),
            nextArrow: $('#gift-next-arrow')
        });

        $gifts.on('init reInit afterChange', function(event, slick, currentSlide){
            const i = (currentSlide ? currentSlide : 0) + 1;
            $countSlide.text(i + '/' + slick.slideCount);
        });
    }

    const $product = $('#product');

    if ($product.length) {
        const $countSlide = $('#product-count-slide');

        $product.slick({
            infinite: false,
            prevArrow: $('#product-prev-arrow'),
            nextArrow: $('#product-next-arrow')
        });

        $product.on('init reInit afterChange', function(event, slick, currentSlide){
            const i = (currentSlide ? currentSlide : 0) + 1;
            $countSlide.text(i + '/' + slick.slideCount);
        });
    }

    const $events = $('#events');

    if ($events.length) {
        const $countSlide = $('#slide-count');

        $events.slick({
            infinite: false,
            slidesToShow: 1.5,
            prevArrow: $('#prev-arrow'),
            nextArrow: $('#next-arrow')
        });
        $events.on('init reInit afterChange', function(event, slick, currentSlide){
            const i = (currentSlide ? currentSlide : 0) + 1;
            $countSlide.text(i + '/' + slick.slideCount);
        });
    }

    $('#tabs .store__top-tab').on('click', function () {
        $('#tabs .store__top-tab').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        $('.' + $(this).data().tab).show();
        setTimeout(function () {
            $gifts.slick('refresh');
            $events.slick('refresh');
        }, 0);
    });


    // Фиксированные шапки
    const $headerTop = $('#header-top');
    const $nav = $('#nav');
    const $window = $(window);
    const $body = $(document);
    const $footer = $('#footer');
    const $header = $('#header');

    $window.on('scroll', headerHide);

    function headerHide() {

        const delta = document.documentElement.clientWidth / 1440;
        if ($window.scrollTop() > 150) {
            $headerTop.hide()
        } else {
            $headerTop.show();
        }

        const contentHeight = $body.height() - $footer.height();

        if ($window.scrollTop() + $nav.height() + (194 * delta) >= (contentHeight - (131 * delta))) {
            $nav.addClass('nav-stop');
        } else {
            $nav.removeClass('nav-stop');
        }
    }

    headerHide();
});

/////////// Калеендарь //////////
if (window.mobiscroll) {
    mobiscroll.setOptions({
        locale: mobiscroll.localeRu,
        theme: 'ios',
        themeVariant: 'light'
    });
    $('#inline-picker').mobiscroll().datepicker({
        controls: ['calendar'],
        display: 'inline',
        touchUi: false,
        marked: [
            {
                date: new Date(2022, 8, 2),
                color: '#46c4f3'
            }
        ]
    });

}
