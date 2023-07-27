def word_to_number(word):
    # Define the word-to-number mapping in a dictionary
    word_to_num = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'ten': 10,
        'eleven': 11,
        'twelve': 12,
        'thirteen': 13,
        'fourteen': 14,
        'fifteen': 15,
        'sixteen': 16,
        'seventeen': 17,
        'eighteen': 18,
        'nineteen': 19,
        'twenty': 20,
        'thirty': 30,
        'forty': 40,
        'fifty': 50,
        'sixty': 60,
        'seventy': 70,
        'eighty': 80,
        'ninety': 90,
        'hundred': 100,
        'thousand': 1000,
        'million': 1000000,
    }

    # Split the input word into individual words
   
    words = word.replace("-"," ").split()
 

    # Initialize variables to store the result
    total = 0
    current_number = 0

    for w in words:
        if w == 'and':
            continue

        if w in word_to_num:
            val = word_to_num[w]
           
            if val == 100:  # Handle hundreds
                current_number *= val
                
            elif val == 1000 or val == 1000000:  # Handle thousands and millions
                total += current_number * val
                current_number = 0
            else:
                current_number += val

    # Add the remaining value after the loop
    total += current_number

    return total

# Test the function
while True:
    word = input("Enter a word (zero to 999,999,999): ")
    if word.lower() == 'exit':
        break
    number = word_to_number(word.lower())
    print(f"The number in integer format: {number}")
