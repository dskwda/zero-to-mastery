# Step 14
# In previous lessons, you learned that the return statement is used to return a value from a function, so that you can use it elsewhere in your code:
# 
# def spam():
#     return 'Spam!'
# Remove the print(encrypted_text) call from your function. Then, delete the declaration of the encrypted_text variable and directly return text.translate(translation_table) from your function.

def caesar(text, shift):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet, shifted_alphabet)
    return text.translate(translation_table)

encrypted_text = caesar('freeCodeCamp', 3)
print(encrypted_text)
