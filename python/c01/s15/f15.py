# Step 15
# You might have noticed that, although the message is encrypted, the uppercase characters have been left untouched. This happens because the translation table does not include uppercase letters.
# 
# To fix it, you'll need to modify the strings passed to your str.maketrans() call using the upper() method:
# 
# greet = 'Hello'
# print(greet.upper()) # HELLO
# Update your str.maketrans() call by concatenating to each argument the uppercase version of the argument itself.

def caesar(text, shift):    
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet + alphabet.upper(), shifted_alphabet + shifted_alphabet.upper())
    return text.translate(translation_table)

encrypted_text = caesar('freeCodeCamp', 3)
print(encrypted_text)
