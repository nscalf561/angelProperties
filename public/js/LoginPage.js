$(function() {

    $('#login-form-link').click(function(e) {
      e.preventDefault();
      $("#login-form").delay(100).fadeIn(100);
      $("#register-form").fadeOut(100);
      $('#register-form-link').removeClass('active');
      $(this).addClass('active');
  });
  $('#register-form-link').click(function(e) {
    e.preventDefault();
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
  });

});
