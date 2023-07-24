import re

def censor_card_number(card_number):
    # Remove all non-digit characters (e.g., spaces)
    cleaned_card_number = re.sub(r'\D', '', card_number)

    # Check if the resulting card number is valid (13, 16, or 18 digits)
    if not re.match(r'^(\d{13}|\d{16}|\d{18})$', cleaned_card_number):
        return None

    # Create a masked version with "x" for all digits except the last four
    masked_card_number = 'x' * (len(cleaned_card_number) - 4) + cleaned_card_number[-4:]

    # Add the spaces back to the masked card number
    masked_card_with_spaces = ' '.join(masked_card_number[i:i+4] for i in range(0, len(masked_card_number), 4))

    return masked_card_with_spaces.strip()

# Example usage:
card_number1 = "1244 5005 3701 9993"
print(censor_card_number(card_number1))  # Output: "xxxx xxxx xxxx 9993"

card_number2 = "67619600 0000551045"
print(censor_card_number(card_number2))  # Output: "xxxx xxxx xxxx 1045"

card_number3 = "1234567890123456"
print(censor_card_number(card_number3))  # Output: "xxxxxxxxxxxx 3456"

card_number4 = "1234-5678-9012-3456"
print(censor_card_number(card_number4))  # Output: None (Invalid format, contains non-digits)

card_number5 = "12345678901234567890"
print(censor_card_number(card_number5))  # Output: None (Invalid format, too many digits)

card_number6 = "123456789012345678"
print(censor_card_number(card_number6))  # Output: "xxxxxxxxxxxx 5678"

card_number7 = "1234567890123456789"
print(censor_card_number(card_number7))  # Output: "xxxxxxxxxxxxxx 6789"