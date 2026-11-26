# Step 4
# As you can see from the output, the shifted alphabet starts at the letter f because shift has the value 5. But now the first five letters of the alphabet – a, b, c, d and e – are missing from the shifted alphabet, so you'll need to add them at the end of the shifted alphabet. You can use the + operator to concatenate the missing portion of the alphabet.
# 
# Modify the existing assignment of the shifted_alphabet variable: use the slicing syntax to extract the missing first portion of alphabet and concatenate it to alphabet[shift:].
# 
# As a reminder, sentence[start:stop] returns the characters of sentence from position start (included) to stop (excluded).

alphabet = 'abcdefghijklmnopqrstuvwxyz'
shift = 5
shifted_alphabet = alphabet[shift:] + alphabet[:shift]
print(shifted_alphabet)
