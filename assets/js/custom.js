// Sticky Header
jQuery(window).scroll(function () {
    var header = document.querySelector(".main-header");
    if (jQuery(window).scrollTop() >= 500) {
      jQuery(header).addClass("sticky-header");
    } else {
      jQuery(header).removeClass("sticky-header");
    }
  });