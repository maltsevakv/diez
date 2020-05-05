
$(document).ready(function() {
  if ( $(window).width() < 768 ) {
    startCarousel();
  } else {
    $('.owl-carousel').addClass('off');
  }
  var hamburger = $(".hamburger");
  hamburger.on("click", function(e) {
    hamburger.toggleClass("is-active");
    $('.menu').toggleClass("is-active").slideToggle();  
    
  });
  $(".modal-btn").click(function(){
    $(".modal, .modal-bg").addClass("active");
    $("body").css("overflow", "hidden");
    $(".modal, .modal-bg").fadeIn();
  })
  $(".modal-bg, .modal-close").click(function() {
    $(".modal, .modal-bg").removeClass("active");
    $("body").css("overflow", "auto");
    $(".modal, .modal-bg").fadeOut();
  })

});

$(window).resize(function() {
    if ( $(window).width() < 768 ) {
      startCarousel();
    } else {
      stopCarousel();
    }
});

function startCarousel(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplayTimeout:2000,
    nav: true,
    items: 1,
    dots: false
  
  });
}
function stopCarousel() {
  var owl = $('.owl-carousel');
  owl.trigger('destroy.owl.carousel');
  owl.addClass('off');
}

 