function integerToRoman(num) {
    // Define an array that contains the Roman numeral characters and their corresponding integer values
    const romanNumerals:any = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1]
    ];
  
    // Initialize an empty string to store the Roman numeral equivalent of the input integer
    let result = "";
  
    // Loop through each element in the romanNumerals array
    for (let i = 0; i < romanNumerals.length; i++) {
      // While the input integer is greater than or equal to the integer value of the current Roman numeral
      while (num >= romanNumerals[i][1]) {
        // Add the current Roman numeral to the result string
        result += romanNumerals[i][0];
        // Subtract the integer value of the current Roman numeral from the input integer
        num -= romanNumerals[i][1];
      }
    }
  
    // Return the result string, which contains the Roman numeral equivalent of the input integer
    return result;
  }

  integerToRoman(153)
