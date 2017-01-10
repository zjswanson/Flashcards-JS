$(function() {
  // Data to fill in panels on page:
  var panelData = [
    ["JavaScript (JS)", "Otherwise know as ECMA Script - the language of the browser"],
    ["Operators", "Symbols used to assign or compare data"],
    ["Variables", "Symbols used to represent and store data."],
    ["Variable naming conventions", '"lowerCamelCase" and names that describe variable&#39s purpose'],
    ["Functions", "Anonymous or named set of intstructions with parameter list"]
  ];

  /*
  <div class="panel panel-default">
    <div class="panel-heading clickable-heading">
      <h4>Something to explain</h4>
    </div>
    <div class="panel-body hidden clickable-body">
      <p>Something explained</p>
    </div>
  </div>
  */

  var panelRow;
  for (panelRow = 0; panelRow < panelData.length; panelRow ++) {
    var onePanel =
    '<div class="panel panel-default">' +
    '<div class="panel-heading clickable-heading">' +
    '<h4>' + panelData[panelRow][0] + '</h4>' +
    '</div>' +
    '<div class="panel-body hidden clickable-body">' +
    '<p>' + panelData[panelRow][1] + '</p>' +
    '</div>' +
    '</div>';

    $("#panels").append(onePanel);
  };

  $(".clickable-heading").click( function() {
    $(this).siblings(".clickable-body").removeClass("hidden");
  });

  $(".clickable-body").click( function() {
    $(this).addClass("hidden");
  });

});
