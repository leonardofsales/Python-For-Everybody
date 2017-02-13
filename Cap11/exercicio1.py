import re
handle = open('mbox.txt')
regular = raw_input('Enter a regular expression: ')
count = 0
for line in handle:
    line = line.rstrip()
    if re.search(regular, line):
        count = count + 1
print "mbox.txt had", count, "lines that matched", regular