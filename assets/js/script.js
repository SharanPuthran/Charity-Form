$(document).ready(function() {
    // ===== Progress Bar ====
    // on page load...
    moveProgressBar();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });

    // SIGNATURE PROGRESS
    function moveProgressBar() {
        $('.progress-wrap').each(function() {
            var getPercent = ($(this).data('progress-percent') / 100);

            var getProgressWrapWidth = $(this).width();

            var progressTotal = getPercent * getProgressWrapWidth;

            var animationLength = 1000;
            // on page load, animate percentage bar to data percentage length
            // .stop() used to prevent animation queueing
            $(this).find('.progress-bar').stop().animate({
                left: progressTotal
            }, animationLength);
        });

    }
});

document.getElementById('integeronly').addEventListener('keydown', function(e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if (!([8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
            (key == 65 && (e.ctrlKey || e.metaKey)) ||
            (key >= 35 && key <= 40) ||
            (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
            (key >= 96 && key <= 105)
        )) e.preventDefault();
});

$('#integeronly').keyup(function () {
  $('#display').text($(this).val());
});
$('#integeronly').bind('keyup change',function(){
    if(this.value.length > 0){
        $('.note-text').show();
    }
    else {
        $('.note-text').hide();
    }
});
