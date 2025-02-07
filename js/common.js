$(".gnb > li").mouseenter(function () {
  $(this).find(".depth2").stop().fadeIn();
  $(".depth2_bg").stop().fadeIn();
});

$(".gnb > li").mouseleave(function () {
  $(this).find(".depth2").stop().fadeOut();
  $(".depth2_bg").stop().fadeOut();
});

$(".ham").click(function () {
  $(".mgnb-wrap").fadeIn();
});

$(".mgnb-close").click(function () {
  $(".mgnb-wrap").fadeOut();
});