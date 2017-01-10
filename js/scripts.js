$(function() {

  $(".clickable-heading").click( function() {
    $(this).siblings(".clickable-body").removeClass("hidden");
  });

  $(".clickable-body").click( function() {
    $(this).addClass("hidden");
  });

});
