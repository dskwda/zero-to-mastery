# Step 18
# The not operator reverses a boolean value. It changes True to False and False to True:
# 
# print(not True) # False
# print(not False) # True
# Use the not operator to fix the condition of the if statement so that your function returns Shift must be an integer value. when shift is not an integer.

def caesar(text, shift):
    if not isinstance(shift, int):
        return 'Shift must be an integer value.'
    
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet + alphabet.upper(), shifted_alphabet + shifted_alphabet.upper())
    return text.translate(translation_table)

encrypted_text = caesar('freeCodeCamp', 3)
print(encrypted_text)
