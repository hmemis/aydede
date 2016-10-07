// This is where it all goes :)
$(document).ready(function () {
    $('li[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'bottom',
        html: true
    });
});