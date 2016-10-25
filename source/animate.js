


$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('div').addClass('fix');
    } else {
        $('div').removeClass('fix');
    }
});