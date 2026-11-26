# Step 21
# As you've already verified, the shift passed to encrypt the text should be a positive integer. It cannot exceed 25 (the last index of alphabet) though.
# 
# Add a second condition to the if statement that checks if shift is greater than 25. Remember that the logical OR operation in Python is implemented through the or operator.
# 
# Also, update the returned message to Shift must be an integer between 1 and 25.

def caesar(text, shift):
    if not isinstance(shift, int) or isinstance(shift, bool):
        return 'Shift must be an integer value.'

    if shift < 1 or shift > 25:
        return 'Shift must be an integer between 1 and 25.'

    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet + alphabet.upper(), shifted_alphabet + shifted_alphabet.upper())
    return text.translate(translation_table)

encrypted_text = caesar('freeCodeCamp', 3)
print(encrypted_text)
