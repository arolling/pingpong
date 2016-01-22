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

// ROMAN NUMERAL CONVERSION FUNCTION

var breakDown = function(number) {
  var romanBases = ["M", "D", "C", "L", "X", "V", "I"];
  var arabicBases = [1000,500,100,50,10,5,1];
  var romanNumeral = '';

  for (var i=0; i < romanBases.length ; i++) {
    if (number >= arabicBases[i]) {
      var quantity = Math.floor(number / arabicBases[i]);
      var remainder = number % arabicBases[i];
      number = remainder;
      for (var j = 0; j < quantity; j++) {
        romanNumeral += romanBases[i];
      }
    }
  }
  return romanNumeral;
}

var moreThanThree = function(rawNumerals) {
  if (rawNumerals.includes('VIIII')) {
    rawNumerals = rawNumerals.replace(/viiii/gi, 'IX');
  }
  if (rawNumerals.includes('IIII')) {
    rawNumerals = rawNumerals.replace(/iiii/gi, 'IV');
  }
  if (rawNumerals.includes('LXXXX')) {
    rawNumerals = rawNumerals.replace(/lxxxx/gi, 'XC');
  }
  if (rawNumerals.includes('XXXX')) {
    rawNumerals = rawNumerals.replace(/xxxx/gi, 'XL');
  }
  if (rawNumerals.includes('DCCCC')) {
    rawNumerals = rawNumerals.replace(/dcccc/gi, 'CM');
  }
  if (rawNumerals.includes('CCCC')) {
    rawNumerals = rawNumerals.replace(/cccc/gi, 'CD');
  }
  return rawNumerals;
}

var romanConverter = function(number){
  if (number > 3999) {
    return "Please enter a number below 4000; the Romans did not think big";
  }
  var rawNumerals = breakDown(number);
  if (rawNumerals.includes('IIII') || rawNumerals.includes('XXXX') || rawNumerals.includes('CCCC')) {
    var numerals = moreThanThree(rawNumerals);
  } else {
    var numerals = rawNumerals;
  }
  return numerals;
}
// END ROMAN NUMERAL CONVERSION

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

  $("form#romanForm").submit(function(event) {
    event.preventDefault();
    var arabicInteger = parseInt($("#romanInput").val());
    if (Math.sign(arabicInteger) === 1) {
      var romanInteger = romanConverter(arabicInteger);
      $("div#romanOutput").html("<h3>" + romanInteger + "</h3>");
    } else {
      console.log("invalid");
      $("div#romanOutput").html("<h2>Please enter a positive integer!</h2>");
    } //END ELSE STATEMENT
  }); //END Roman FORM INPUT FUNCTION

}); //END DOCUMENT READY FUNCTION
