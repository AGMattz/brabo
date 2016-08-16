
$(document).ready(function(){
  $(".box").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });
  $(window).scroll(function () {
      if ($(window).scrollTop() > 20) {
        $('nav').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 21) {
        $('nav').removeClass('navbar-fixed');
      }
    });
  $("#toggle").on('click', function(e) {
  $('nav').toggleClass('js-open');
      e.preventDefault();
  });

  $(".nav-background").on('click', function() {
    $('nav').removeClass('js-open');
  });
});
