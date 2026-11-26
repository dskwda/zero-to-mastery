# Step 10
# As you can see from the output, the message has been encrypted. Next, you will make your code reusable so that it can encrypt different messages.
# 
# For that, you'll need to create a function. As a reminder, here's how to create a function named spam that prints Spam! on the terminal:
# 
# def spam():
#     print('Spam!')
# Create a function named caesar. Put all your existing code within the function body. Pay attention to keep the same indentation level for all of the lines within the function body.

def caesar():
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shift = 5
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet, shifted_alphabet)
    text = 'hello world'
    encrypted_text = text.translate(translation_table)
    print(encrypted_text)
