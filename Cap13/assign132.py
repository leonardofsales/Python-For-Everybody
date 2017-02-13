# In this assignment you will write a Python program somewhat similar to
# http://www.pythonlearn.com/code/json2.py. The program will prompt for a URL,
# read the JSON data from that URL using urllib and then parse and extract the
# comment counts from the JSON data, compute the sum of the numbers in the file and enter
# the sum below:
# We provide two files for this assignment. One is a sample file where we give you the sum
# for your testing and the other is the actual data you need to process for the assignment.
# 
# Sample data: http://python-data.dr-chuck.net/comments_42.json (Sum=2553)
# Actual data: http://python-data.dr-chuck.net/comments_267216.json (Sum ends with 52)

import urllib
import json

while True:
    
    soma = 0
    n = 0
    
    address = raw_input('Enter location: ')
    if len(address) < 1 : break
    
    url = urllib.urlopen(address)
    data = url.read().decode()
    
    info = json.loads(data)
    
    print 'Retrieving', address
    print 'Retrieved', len(data), 'characteres'
    
    indice = info['comments']
    
    for item in indice:
        contagem = int(item['count'])
        soma = soma + contagem
        n = n + 1

    print 'Count', n
    print 'Sum', soma