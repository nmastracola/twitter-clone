function countUpdate() {
    var left = 140 - $(this).val().length;
    $('#char-count').text(left);

    if (left < 20 && left > 10) {
        $('#char-count').css({color: "black"});
    } else if (left < 11 && left > 0) {
        $('#char-count').css({color: "red"});
    } else if (left < 0) {
        $('#char-count').css({color: "red"});
        $('#tweet-submit').removeClass('button')
            .addClass('button:disabled')
            .attr('disabled', "disabled");
    } else {
        $('#char-count').removeAttr('style');
        $('#tweet-submit').attr('disabled');
    }
}

$(document).ready( function () {
    var actions = $('.tweet-actions');
    var content = $('.content');
    var compose = $('.tweet-compose:first');
    var control = $('#tweet-controls');
    var clone = $('.tweet:nth-child(2)').clone();


    // actions.css({visibility: "hidden"});
    control.hide();
    content.hover(
        function () {
            $(this).children('.tweet-actions').css({visibility: "visible"}); },
        function () {
            $(this).children('.tweet-actions').css({visibility: "hidden"});
        });
    $('#dashboard').on('click',function () {
        compose.animate({height: "5em"}, 'fast');
        control.show()
        });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#dashboard').length) {
            compose.animate({height: "2.5em"}, 'fast');
            control.hide();
        }
    });

    compose.keyup(countUpdate);
    compose.keydown(countUpdate);

     $('#tweet-submit').on('click', function () {
         var message = $('.tweet-compose').val();
         clone.find('.avatar').attr('src', 'img/alagoon.jpg' ).end()
             .find('.fullname').text('Nicholas Mastracola').end()
             .find('.username').text('@nmastracola').end()
             .find('.tweet-text').css({"word-wrap": "normal"}).text(message).end()
             .find('.num-retweets').text('0').end()
             .find('.num-favorites').text('0').end()
             .find('.users-interact').html('<div></div>').end()
             .prependTo('#stream')
     })
    actions.css({visibility: "hidden"});


});