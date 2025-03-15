$("#drawer").on("click", function () {
  $(".nav-list-menu").slideToggle();
});

var page_top = $(".page-top-button");
page_top.hide();

$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    page_top.fadeIn(300);
  } else {
    page_top.fadeOut(300);
  }
});

page_top.click(function () {
  $("body, html").animate({
    scrollTop: 0
  }, 500);
})

$(".menu-img a").click(function () {
  var imgSrc = $(this).children().attr('src');
  $(".big-img").children().attr('src', imgSrc);
  $(".modal").fadeIn();
  $("body, html").css("overflow-y", "hidden");
});

$(".close-btn").click(function () {
  $(".modal").fadeOut();
  $("body, html").css("overflow-y", "visible");
});
