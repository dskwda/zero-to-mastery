# Step 19
# Python treats booleans as a special kind of integer: True behaves like 1, and False behaves like 0. This means that isinstance() treats Boolean values as integers:
# 
# print(isinstance(True, int)) # True
# print(isinstance(False, int)) # True
# Because of this, your function currently accepts True and False as shift values.
# 
# Use the or operator to add a second condition to your if statement that checks if shift is a Boolean with isinstance(shift, bool). This way, your function also returns Shift must be an integer value. when shift is True or False.

def caesar(text, shift):
    if not isinstance(shift, int) or isinstance(shift, bool):
        return 'Shift must be an integer value.'
    
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet + alphabet.upper(), shifted_alphabet + shifted_alphabet.upper())
    return text.translate(translation_table)

encrypted_text = caesar('freeCodeCamp', 3)
print(encrypted_text)
