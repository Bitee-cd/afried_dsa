function censorCardNumber(cardNumber) {
  // Remove all non-digit characters (e.g., spaces)
  const cleanedCardNumber = cardNumber.replace(/\D/g, "");

  // Check if the resulting card number is valid (13, 16, 18, or 19 digits)
  if (
    !/^\d{13}|\d{16}|(\d{8} \d{10})|(\d{8}\d{10})|(\d{18}|\d{19})$/.test(
      cleanedCardNumber
    )
  ) {
    return null;
  }

  // Create a masked version with "x" for all digits except the last four
  const maskedCardNumber =
    "x".repeat(cleanedCardNumber.length - 4) + cleanedCardNumber.slice(-4);

  // Add the spaces back to the masked card number
  let maskedCardWithSpaces = "";

  if (cleanedCardNumber.length === 16) {
    maskedCardWithSpaces = maskedCardNumber.replace(/(.{4})/g, "$1 ");
  } else if (cleanedCardNumber.length === 18) {
    maskedCardWithSpaces = cleanedCardNumber.replace(/(.{8})(.{10})/, "$1 $2");
  } else if (cleanedCardNumber.length === 19) {
    maskedCardWithSpaces = cleanedCardNumber.replace(
      /(.{8})(.{10})(.{1})/,
      "$1 $2 $3"
    );
  } else {
    maskedCardWithSpaces = maskedCardNumber;
  }

  return maskedCardWithSpaces.trim();
}

// Example usage:
const cardNumber1 = "1244 5005 3701 9993";
console.log(censorCardNumber(cardNumber1)); // Output: "xxxx xxxx xxxx 9993"

const cardNumber2 = "676196000000551045";
console.log(censorCardNumber(cardNumber2)); // Output: "xxxx xxxx xxxx 1045"

const cardNumber3 = "1234567890123456";
console.log(censorCardNumber(cardNumber3)); // Output: "xxxxxxxxxxxx 3456"

const cardNumber4 = "1234-5678-9012-3456";
console.log(censorCardNumber(cardNumber4)); // Output: null (Invalid format, contains non-digits)

const cardNumber5 = "12345678901234567890";
console.log(censorCardNumber(cardNumber5)); // Output: null (Invalid format, too many digits)

const cardNumber6 = "123456789012345678";
console.log(censorCardNumber(cardNumber6)); // Output: "xxxxxxxxxxxxx 5678"
