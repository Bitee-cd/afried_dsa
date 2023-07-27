function wordToNumber(word) {
  // Define the word-to-number mapping in an object
  const wordToNum = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };

  // Split the input word into individual words
  const words = word.toLowerCase().split(/\s+/);

  // Initialize variables to store the result
  let total = 0;
  let currentNumber = 0;

  for (const w of words) {
    if (w === "and") {
      continue;
    }

    if (wordToNum.hasOwnProperty(w)) {
      const val = wordToNum[w];

      if (val === 100) {
        // Handle hundreds
        currentNumber *= val;
      } else if (val === 1000 || val === 1000000) {
        // Handle thousands and millions
        total += currentNumber * val;
        currentNumber = 0;
      } else {
        // Regular numbers
        currentNumber += val;
      }
    }
  }

  // Add the remaining value after the loop
  total += currentNumber;

  return total;
}

// Test the function
let inputWord;
while (true) {
  inputWord = prompt("Enter a word (zero to 999,999,999):");
  if (inputWord === "exit" || inputWord === null) {
    break;
  }
  const number = wordToNumber(inputWord);
  alert(`The number in integer format: ${number}`);
}
