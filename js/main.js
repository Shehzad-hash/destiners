// Tabs
$('.tab-btn').click(function (e) {
    $('.my-tab').css('display', 'none');
    var sectionClass = $(this).attr('sec');
    $(sectionClass).fadeIn(1000);
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
});



// Owl
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 12,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1.2,
            nav: false,
            loop: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 4,
            nav: false,
            loop: false
        }
    }
});