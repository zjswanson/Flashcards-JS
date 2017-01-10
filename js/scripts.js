$(function() {
  // Data to fill in panels on page:
  var panelData = [
    ["JavaScript (JS)", "Otherwise know as ECMA Script - the language of the browser"],
    ["Operators", "Symbols used to assign or compare data"],
    ["Variables", "Symbols used to represent and store data."],
    ["Variable naming conventions", '"lowerCamelCase" and names that describe variable&#39s purpose'],
    ["Functions", "Anonymous or named set of intstructions with parameter list"]
  ];

  var dataRow, allPanels = '';

  for (dataRow = 0; dataRow < panelData.length; dataRow ++) {

    // Is this a new row of 3 columns? Yes if column will be 0.
    if (dataRow % 3 === 0) {
      // Given a new row of columns, do we need to end the previous row?
      // Yes, if we are on any data row past the first one.
      if (dataRow > 0) {
        allPanels += '</div>';
      };

      allPanels += '<div class="row">';
    };

    allPanels +=
    '<div class="col-md-4">' +
      '<div class="panel panel-default">' +
        '<div class="panel-heading clickable-heading">' +
          '<h4>' + panelData[dataRow][0] + '</h4>' +
        '</div>' +
        '<div class="panel-body hidden clickable-body">' +
          '<p>' + panelData[dataRow][1] + '</p>' +
        '</div>' +
      '</div>' +
    '</div>';

  };
  allPanels +=
    '</div>';

  $("#panels").append(allPanels);



  $(".clickable-heading").click( function() {
    $(this).siblings(".clickable-body").removeClass("hidden");
  });

  $(".clickable-body").click( function() {
    $(this).addClass("hidden");
  });

});
