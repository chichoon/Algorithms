import time
letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

k, n = list(map(int, input().split(" ")))
frq = []
for i in range(n):
    frq.append(input().split(" "))
    frq[i][1] = int(frq[i][1])
# Letter + frequency 

enc = input()
dec = []
key = [0 for i in range(k)]

start = time.time()
while 1:
    for i in range(0, len(enc)):
        dec.append(letter[(letter.index(enc[i]) - key[i % 5])])
    
    dec_letter = ''.join(dec)
    score = 0
    for i in range(n):
        if dec_letter.count(frq[i][0]) == frq[i][1] : score = score + 1
    if score == n : break
    else :
        key[0] = key[0] + 1
        for i in range(k):
            if key[i] == 26 :
                key[i + 1] = key[i + 1] + 1
                key[i] = 0
    dec = []

result = []
for i in range(k) :
    result.append(letter[key[i]])
print(''.join(result))
print("time :", time.time() - start) 