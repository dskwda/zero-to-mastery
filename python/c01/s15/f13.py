# Step 13
# Now your code is reusable. However, the caesar function prints a message on the terminal and gives back None by default. To prove it, print encrypted_text at the end of your code.

def caesar(text, shift):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet, shifted_alphabet)
    encrypted_text = text.translate(translation_table)
    print(encrypted_text)

encrypted_text = caesar('freeCodeCamp', 3)
print(encrypted_text)
