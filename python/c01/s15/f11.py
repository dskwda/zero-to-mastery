# Step 11
# As you learned in a previous lesson, functions can have parameters, which are variables that can be referenced within the function. Here's a sum function with two parameters, num1 and num2.
# 
# def sum(num1, num2):
#     print(num1 + num2)
# The message to encrypt and the shift are still hardcoded in your function. Give your function two parameters named text and shift, and delete the declarations of both the text and shift variables from the caesar function body.

def caesar(text, shift):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet, shifted_alphabet)
    encrypted_text = text.translate(translation_table)
    print(encrypted_text)
