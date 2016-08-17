
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
  $("#ham").on('click', function(e) {
  $('#navbar-mob').toggleClass('mob-click');
      e.preventDefault();
  });

  $("#navbar-mob").on('click', function() {
    if(!$('#navbar-mob').hasClass('mob-click')){
      this.removeClass('mob-click');
    }
  });
});
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.7";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
