#!/usr/bin/python

fname = raw_input("Digite o nome do arquivo: ")
try:
    fhand = open(fname)
except:
    if fname == "NA NA BOO BOO":
        print "NA NA BOO BOO TO YOU - Yout have been punk'd"
    else:
        print "File cannot be opened: ", fname
    exit()
for line in fhand:
    line = line.upper()
    print line
