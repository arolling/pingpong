//PINGPONG FUNCTION
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
// END PINGPONG FUNCTION

// PRIME SIFTING FUNCTION
var populateArray = function(limit) {
  var limitArray = [];
  for (var i=0; i <= limit; i++) {
    limitArray.push(i);
  }
  return limitArray;
}

var rootFinder = function(limit) {
  for (var i=2; i < limit; i++) {
    if (i * i > limit) {
      var rootLimit = i;
      return rootLimit;
    }
  }
}

var findNotPrimes = function(prime, rootLimit, limitArray, limit) {
  for (var i = 2; i < limit; i++) {
    var test = prime * i;
    delete limitArray[test];
  }
  return limitArray;
}

var primeFinder = function(limit) {
 var limitArray = populateArray(limit);
 var rootLimit = rootFinder(limit);
 delete limitArray[0];
 delete limitArray[1];
 for (var i=2; i < rootLimit; i++) {
   findNotPrimes(i, rootLimit, limitArray, limit);
 }
 var filteredArray = limitArray.filter(deHoler);
 return filteredArray;
}

var deHoler = function(value) {
  return value >= 1;
}
// END PRIME SIFTING FUNCTION


// END BUSINESS LOGIC

$(document).ready(function() {
  $("form#pingpongForm").submit(function(event) {
    event.preventDefault();
    var upperLimit = parseInt($("#pingpongInput").val());
    if (Math.sign(upperLimit) === 1) {
      var pingpongList = pingpong(upperLimit);
      var outputContent = '';
      $("div#pingpongOutput").html(function() {
        for (var i=0; i < pingpongList.length; i++) {
          outputContent += '<li>' + pingpongList[i] + '</li>';
        }
        return "<ul>" + outputContent + "</ul>";
      }); // END OUTPUT WRITING FUNCTION
    } else {
      console.log("invalid");
      $("div#pingpongOutput").html("<h2>Please enter a positive integer!</h2>");
    } //END ELSE STATEMENT
  }); //END pingpong FORM INPUT FUNCTION

  $("form#primeForm").submit(function(event) {
    event.preventDefault();
    var upperLimit = parseInt($("#primeInput").val());
    if (Math.sign(upperLimit) === 1) {
      var primeList = primeFinder(upperLimit);
      var outputContent = '';
      $("div#primeOutput").html(function() {
        for (var i=0; i < primeList.length; i++) {
          outputContent += '<li>' + primeList[i] + '</li>';
        }
        return "<ul>" + outputContent + "</ul>";
      }); // END OUTPUT WRITING FUNCTION
    } else {
      console.log("invalid");
      $("div#primeOutput").html("<h2>Please enter a positive integer!</h2>");
    } //END ELSE STATEMENT
  }); //END prime FORM INPUT FUNCTION

}); //END DOCUMENT READY FUNCTION
