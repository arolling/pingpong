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
  console.log(numbersList);
  return numbersList;
}
