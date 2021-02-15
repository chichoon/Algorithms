letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

b = 'HELLOWORLD'
key = 'CPSPC'
# letter note & original sentence + key

encoded = []
for i in range(0, len(b)):
    encoded.append(letter[(letter.index(key[i % 5]) + letter.index(b[i])) % 26])

print("encoded : " + ''.join(encoded))
# Encoding method

decoded = []
for i in range(0, len(encoded)):
    if letter.index(encoded[i]) < letter.index(key[i % 5]) :
        decoded.append(letter[(letter.index(encoded[i]) - letter.index(key[i % 5])) + 26])
    else:
        decoded.append(letter[(letter.index(encoded[i]) - letter.index(key[i % 5]))])

print("decoded : " + ''.join(decoded))
# Decoding method