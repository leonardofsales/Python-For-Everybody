# Note - this code must run in Python 2.x and you must download
# http://www.pythonlearn.com/code/BeautifulSoup.py
# Into the same folder as this program
# Sample - http://python-data.dr-chuck.net/comments_42.html
# Actual data - http://python-data.dr-chuck.net/comments_267215.html

import urllib
from BeautifulSoup import *

numeros = list()
count  = 0

url = raw_input('Enter - ')
html = urllib.urlopen(url).read()

soup = BeautifulSoup(html)

tags = soup('span')
for tag in tags:
    inteiro = int(tag.contents[0])
    count = count + 1
    numeros.append(inteiro)

soma = sum(numeros)

print 'Count', count
print 'Sum', soma