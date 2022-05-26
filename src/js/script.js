
$(document).on("click", ".hamburger-menu", function(){
    $(".mobile_version").animate({right: "0"}, 0.8);
    $("body").addClass("hidden_body");
    $(this).addClass("open");
});


$(document).on("click", ".mobile_version_close", function(){
    $(".mobile_version").animate({right: '-1925px'}, 0.8);
    $("body").removeClass("hidden_body");
    $(".hamburger-menu").removeClass("open");
});


$(document).on("click", ".faqs_item_title_icon_wrapper", function(){
     $(this).parent().toggleClass("open");
    $(this).parent().find(".faqs_item_info").slideToggle("0.5");
});



var swiper = new Swiper("#mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loopedSlides: 6,
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });