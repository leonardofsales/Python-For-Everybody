# Procura por linhas que comecem por "From" e contenham um simbolo @

import re
hand = open('mbox-short.txt')
for line in hand:
    line = line.rstrip()
    if re.search('^From:.+@', line): # ^ do comeco da string || .+ um ou mais quaisquer caractere
        print(line)