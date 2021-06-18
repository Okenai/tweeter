$(document).ready(function () {
  $('textarea').on('keyup', function () {
    $('.counter').html(140 - $('textarea').val().length);
    if ($('.counter').html() < 0) {
      $('.counter').addClass('exceeded');
    } else {
      $('.counter').removeClass('exceeded');
    }
  })
});