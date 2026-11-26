# Step 3
# In this workshop, you are going to build a Caesar cipher. A Caesar cipher encrypts text by replacing each letter of the plaintext with a letter a fixed number of positions later in the alphabet. For example, with a shift of 5, a would be replaced by f, b by g and so on.
# 
# To implement this cipher, you'll need to create a new version of your alphabet that starts at the position indicated by the shift. As you learned in a previous lesson, you can extract part of a string using string slicing:
# 
# fcc = 'freeCodeCamp'
# print(fcc[8:]) # Camp
# Create a variable named shifted_alphabet and use the slicing syntax to assign it the portion of alphabet that starts at the index of shift. Then, call the built-in print() function to print shifted_alphabet on the terminal and look at the result.

alphabet = 'abcdefghijklmnopqrstuvwxyz'
shift = 5
shifted_alphabet = alphabet[shift:]
print(shifted_alphabet)
