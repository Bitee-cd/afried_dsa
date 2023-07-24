function nextBiggerNumber(inputNumber) {
  // Convert the number to an array of digits
  //   const digits = inputNumber.toString().split("").map(Number);

  // Find the index of the first digit that is smaller than the digit to its right
  //   let i = digits.length - 2;
  //   while (i >= 0 && digits[i] >= digits[i + 1]) {
  //     console.log(i, digits[i]);
  //     i--;
  //   }

  //   // If no such digit is found, it means the number is in descending order, so there is no bigger number
  //   if (i === -1) {
  //     return -1;
  //   }

  //   // Find the smallest digit to the right of the digit at index i and larger than the digit at index i
  //   let j = digits.length - 1;
  //   while (digits[j] <= digits[i]) {
  //     j--;
  //   }

  //   // Swap the digits at index i and j
  //   [digits[i], digits[j]] = [digits[j], digits[i]];

  //   // Sort the digits to the right of index i in ascending order to get the next bigger number
  //   const rightPart = digits.splice(i + 1).sort((a, b) => a - b);

  //   // Combine the left and right parts to get the final result
  //   const nextBigger = parseInt(digits.concat(rightPart).join(""), 10);

  //   return digits;
  const sortedDigits = inputNumber
    .toString()
    .split("")
    .map(Number)
    .sort((a, b) => b - a);

  // Join the sorted digits back into a string and convert it back to a number
  const sortedNumber = parseInt(sortedDigits.join(""), 10);

  // if (sortedNumber === inputNumber) {
  //   return -1;
  // }
  return sortedNumber;
}

// Test cases
console.log(nextBiggerNumber(12)); // Output: 21
console.log(nextBiggerNumber(513)); // Output: 531
console.log(nextBiggerNumber(2017)); // Output: 2071
console.log(nextBiggerNumber(9)); // Output: -1
console.log(nextBiggerNumber(907)); // Output: -1
console.log(nextBiggerNumber(531)); // Output: -1
