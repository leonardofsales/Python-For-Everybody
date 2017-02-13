import re
name = raw_input("Qual arquivo: ")
handle = open(name)
count = 0
soma = 0
for line in handle:
    line = line.rstrip()
    if re.search('^New Revision: [0-9]', line):
        find = re.findall('^New Revision: ([0-9]+)', line)
        revisao = float(find[0])
        soma = float(soma + revisao)
        count = count + 1
media = float(soma / count)
print media