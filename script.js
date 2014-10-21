$(document).ready(function() {
    var state = true;
    $('.circle').click(function() {
        if ( state ) {
            $(this).animate({
                width: 75,
                height: 75
            }, 0 );
        } else {
            $(this).animate({
                width: 100,
                height: 100
            }, 0 );
        }
        state = !state;
    });
});