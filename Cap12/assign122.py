# Note - this code must run in Python 2.x and you must download
# http://www.pythonlearn.com/code/BeautifulSoup.py
# Into the same folder as this program
# Sample http://python-data.dr-chuck.net/known_by_Fikret.html
# Actual data http://python-data.dr-chuck.net/known_by_Mahan.html

import urllib
from BeautifulSoup import *

url = raw_input('Enter URL: ')
count = int(raw_input("Enter count: "))
position = int(raw_input("Enter position: "))

for num in range(0, count+1):
    html = urllib.urlopen(url).read()
    soup = BeautifulSoup(html)
    tags = soup('a')
    print url
    for tag in tags[:position]:
        url = tag.get('href', None)