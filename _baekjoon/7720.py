import time
letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

k, n = input().split(" ")
frq = []
for i in range(int(n)):
    frq.append(input().split(" "))
    frq[i][1] = int(frq[i][1])
# Letter + frequency 

enc = input()
dec = []
key = [0 for i in range(int(k))]

start = time.time()
while 1:
    for i in range(0, len(enc)):
        if letter.index(enc[i]) < key[i % 5] :
            dec.append(letter[(letter.index(enc[i]) - key[i % 5]) + 26])
        else : dec.append(letter[(letter.index(enc[i]) - key[i % 5])])
    
    dec_letter = ''.join(dec)
    score = 0
    for i in range(int(n)):
        if dec_letter.count(frq[i][0]) == int(frq[i][1]) : score = score + 1
    if score == n : break
    elif key[4] == 25 : break
    else :
        key[0] = key[0] + 1
        if key[0] == 26 :
            key[1] = key[1] + 1
            if key[1] == 26 :
                key[2] = key[2] + 1
                if key[2] == 26 :
                    key[3] = key[3] + 1
                    if key[3] == 26 :
                        key[4] = key[4] + 1
                        key[3] = 0
                    key[2] = 0
                key[1] = 0
            key[0] = 0
    dec = []
    print(key)

result = ''
for i in range(int(k)) :
    result.append(letter[key[i]])
print(result)
print("time :", time.time() - start) 