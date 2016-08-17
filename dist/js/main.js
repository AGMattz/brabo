
$(document).ready(function(){
  $(window).scroll(function () {
      if ($(window).scrollTop() > 20) {
        $('nav').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 21) {
        $('nav').removeClass('navbar-fixed');
      }
  });
    $(".box").click(function() {
      window.location = $(this).find("a").attr("href");
      return false;
    });
  // $("#toggle").on('click', function(e) {
  // $('nav').toggleClass('js-open');
  //     e.preventDefault();
  // });
  //
  // $(".nav-background").on('click', function() {
  //   $('nav').removeClass('js-open');
  // });
});
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.7";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
