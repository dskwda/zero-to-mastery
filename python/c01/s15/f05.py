# Step 5
# Now that you have your entire shifted alphabet, remove the print(shifted_alphabet) call.

alphabet = 'abcdefghijklmnopqrstuvwxyz'
shift = 5
shifted_alphabet = alphabet[shift:] + alphabet[:shift]
