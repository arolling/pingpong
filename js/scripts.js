var createNumberList = function(upperLimit) {
  var numbersList = [];
  for (var i=1; i <= upperLimit; i++) {
    numbersList.push(i);
  }
  return numbersList;
}

var pingpong = function(upperLimit) {
  var numbersList = createNumberList(upperLimit);
  for (var i=0; i < numbersList.length; i++) {
    if (numbersList[i] % 15 === 0) {
      numbersList.splice(i, 1, "pingpong");
    } else if (numbersList[i] % 5 === 0) {
      numbersList.splice(i, 1, "pong");
    } else if (numbersList[i] % 3 === 0) {
      numbersList.splice(i, 1, "ping");
    }
  }
  return numbersList;
}
// END BUSINESS LOGIC

$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var upperLimit = parseInt($("#limitInput").val());
    if (Math.sign(upperLimit) === 1) {
      var pingpongList = pingpong(upperLimit);
      var outputContent = '';
      $("div#output").html(function() {
        for (var i=0; i < pingpongList.length; i++) {
          outputContent += '<li>' + pingpongList[i] + '</li>';
        }
        return "<ul>" + outputContent + "</ul>";
      }); // END OUTPUT WRITING FUNCTION
    } else {
      console.log("invalid");
      $("div#output").html("<h2>Please enter a positive integer!</h2>");
    } //END ELSE STATEMENT
  }); //END FORM INPUT FUNCTION
}); //END DOCUMENT READY FUNCTION
