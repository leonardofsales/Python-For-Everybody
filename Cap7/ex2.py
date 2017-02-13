fname = raw_input("Digite o nome do arquivo: ")
count = 0
soma = 0.0
media = 0
try:
    fhand = open(fname)
except:
    if fname == "NA NA BOO BOO":
        print "NA NA BOO BOO TO YOU - Yout have been punk'd"
    else:
        print "File cannot be opened:", fname
    exit()
for line in fhand:
    if not line.startswith("X-DSPAM-Confidence"):
        continue
    find_result = line.find("0")
    cut = line[find_result:]
    cut_float = float(cut)
    count += 1
    soma += cut_float
    media = soma / count
print "Average spam confidence is", media