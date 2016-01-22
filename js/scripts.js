var createNumberList = function(upperLimit) {
  var numbersList = [];
  for (var i=1; i <= upperLimit; i++) {
    numbersList.push(i);
  }
  return numbersList;
}

var findMultiples = function(upperLimit) {
  var numbersList = createNumberList(upperLimit);
  var multiplesOfX = [];
  for (var i=0; i < numbersList.length; i++) {
    if (numbersList[i] % 15 === 0) {
      multiplesOfX.push(numbersList[i]);
    } else if (numbersList[i] % 5 === 0) {
      multiplesOfX.push(numbersList[i]);
    } else if (numbersList[i] % 3 === 0) {
      multiplesOfX.push(numbersList[i]);
    }
  }
  return multiplesOfX;
}
