function convertToRoman(num) {
  var roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100,XC: 90, L: 50,XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
  };
  var output = '';

  for (var i of Object.keys(roman)) {


    var q = Math.floor(num / roman[i]);
   // If q >= 1, num has that many keys
   //if q == 0, num does not contain this roman 
    num -= q * roman[i];
    //Add the number of romans, q times.
    output += i.repeat(q);
  }

  return output;
}

console.log(convertToRoman(1954));
