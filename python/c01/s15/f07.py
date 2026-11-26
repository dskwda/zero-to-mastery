# Step 7
# Declare a new variable named text and assign it the string hello world. This will be the message to encrypt.

alphabet = 'abcdefghijklmnopqrstuvwxyz'
shift = 5
shifted_alphabet = alphabet[shift:] + alphabet[:shift]
translation_table = str.maketrans(alphabet, shifted_alphabet)
text = 'hello world'
