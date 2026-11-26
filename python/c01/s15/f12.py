# Step 12
# Now, test the caesar function by calling it with the string freeCodeCamp and the number 3 as the arguments. Assign the function call to a variable named encrypted_text.

def caesar(text, shift):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet, shifted_alphabet)
    encrypted_text = text.translate(translation_table)
    print(encrypted_text)

encrypted_text = caesar('freeCodeCamp', 3)
