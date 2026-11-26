# Step 23
# You are going to use the parameter added in the previous step to determine if the function should encrypt the text passed to it (default behavior, encrypt=True), or if it should decrypt an encrypted message.
# 
# Create an if statement that checks if encrypt is not truthy. Within the new if statement, set shift to - shift. This is necessary to enable the shift to take place in the opposite direction with respect to the encryption process.

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

encrypted_text = caesar('freeCodeCamp', 3)
print(encrypted_text)
