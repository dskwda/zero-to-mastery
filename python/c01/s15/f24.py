# Step 24
# Declare two functions named encrypt and decrypt, both with text and shift parameters.
# 
# You'll use encrypt for encryption and decrypt for decryption, giving each action a descriptive name.
# 
# From both new functions, return a caesar call that passes in text and shift. In decrypt, also pass False as the third argument.

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

encrypted_text = caesar('freeCodeCamp', 3)
print(encrypted_text)
