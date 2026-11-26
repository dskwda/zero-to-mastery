# Step 26
# Now you're going to test the decrypt function. Replace the value assigned to encrypted_text with the following string, which represents a message to decrypt: Pbhentr vf sbhaq va hayvxryl cynprf.
# 
# Then, declare a variable named decrypted_text and assign it a call to decrypt with encrypted_text as its first argument and a shift of 13 as the second argument.
# 
# Finally, print the decrypted_text on the terminal. With that, the Caesar cipher is complete.

def caesar(text, shift, encrypt=True):
    if not isinstance(shift, int) or isinstance(shift, bool):
        return 'Shift must be an integer value.'

    if shift < 1 or shift > 25:
        return 'Shift must be an integer between 1 and 25.'

    alphabet = 'abcdefghijklmnopqrstuvwxyz'

    if not encrypt:
        shift = - shift
    
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet + alphabet.upper(), shifted_alphabet + shifted_alphabet.upper())
    return text.translate(translation_table)

def encrypt(text, shift):
    return caesar(text, shift)
    
def decrypt(text, shift):
    return caesar(text, shift, encrypt=False)

encrypted_text = 'Pbhentr vf sbhaq va hayvxryl cynprf.'
print(encrypted_text)

decrypted_text = decrypt(encrypted_text, 13)
print(decrypted_text)
