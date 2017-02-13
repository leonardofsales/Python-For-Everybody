# Search for lines that have an at sign between characters
import re
hand = open('mbox-short.txt')
for line in hand:
    line = line.rstrip()
    x = re.findall('\S+@\S+', line) # qualquer numero de caractere nao branco || @ || qualquer numero de caractere nao branco
    if len(x) > 0:
        print(x)