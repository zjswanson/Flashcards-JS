$(function() {
  // Function Section

  // Respond to click on link to toggle display of content
  $("#toggle-shown-link").click( function() {
    $("#initially-shown").fadeToggle();
    $("#initially-hidden").fadeToggle();
  });

  $(".slide-toggle").click( function() {
    $(".slide").slideToggle();
  });

  $("#dark-button").click(function() {
    $("body").addClass("dark");
  });

  $("#light-button").click(function() {
    $("body").removeClass();
  });
});
