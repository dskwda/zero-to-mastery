# Step 16
# Now that you've implemented the basic functionalities of the cipher, it's time to add some validation. For that, you'll need an if statement.
# 
# At the beginning of your function body, create an if statement. For now, use True as the condition, and within the if statement body return the string Shift must be an integer value.

def caesar(text, shift):
    if True:
        return 'Shift must be an integer value.'

    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet + alphabet.upper(), shifted_alphabet + shifted_alphabet.upper())
    return text.translate(translation_table)

encrypted_text = caesar('freeCodeCamp', 3)
print(encrypted_text)
