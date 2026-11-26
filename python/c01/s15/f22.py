# Step 22
# Python allows you to specify a default value for the parameters in a function, creating a function that can be called with fewer or no arguments. Here's how to create a function with a name parameter that has a default value:
# 
# def greet(name='Polly'):
#     return 'Hello ' + name
#     
# print(greet()) # Hello Polly
# Add a third parameter named encrypt to your function and give it a default value of True.

def caesar(text, shift, encrypt=True):
    if not isinstance(shift, int) or isinstance(shift, bool):
        return 'Shift must be an integer value.'

    if shift < 1 or shift > 25:
        return 'Shift must be an integer between 1 and 25.'

    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet + alphabet.upper(), shifted_alphabet + shifted_alphabet.upper())
    return text.translate(translation_table)

encrypted_text = caesar('freeCodeCamp', 3)
print(encrypted_text)
