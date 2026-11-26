# Step 6
# The str.maketrans() method takes two strings of equal length and returns a translation table that maps each character of the first string to the corresponding character of the second string. Each character in the translation table is stored as a Unicode ordinal, a number that uniquely identifies the character.
# 
# lower_chars = 'abc'
# upper_chars = 'ABC'
# 
# table = str.maketrans(lower_chars, upper_chars)
# print(table) # {97: 65, 98: 66, 99: 67}
# You'll learn more about the type of structure returned by str.maketrans() later on in the curriculum. For now, create a translation table that maps the characters in alphabet to the characters in shifted_alphabet and assign it to a variable named translation_table.

alphabet = 'abcdefghijklmnopqrstuvwxyz'
shift = 5
shifted_alphabet = alphabet[shift:] + alphabet[:shift]
translation_table = str.maketrans(alphabet, shifted_alphabet)
