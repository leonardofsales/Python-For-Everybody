import re
handle = open('regex_sum_267210.txt')
numeros = list()
for line in handle:
    if re.search('[0-9]+', line):
        line = line.rstrip()
        find = re.findall('([0-9]+)', line)
        for num in find:
            inteiro = int(num)
            numeros.append(inteiro)
soma = sum(numeros)
print soma