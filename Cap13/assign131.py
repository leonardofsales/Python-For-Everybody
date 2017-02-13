# In this assignment you will write a Python program somewhat similar to
# http://www.pythonlearn.com/code/geoxml.py. The program will prompt for a URL,
# read the XML data from that URL using urllib and then parse and extract the
# comment counts from the XML data, compute the sum of the numbers in the file
# and enter the sum.

import urllib
import xml.etree.ElementTree as ET

soma = 0
contagem = 0

while True:
    address = raw_input('Enter location: ')
    if len(address) < 1 : break
    
    xml = urllib.urlopen(address)
    data = xml.read()
    
    print 'Retrieving', address
    print 'Retrieved', len(data), 'characteres'
    
    tree = ET.fromstring(data)
    
    counts = tree.findall('.//count')

    for count in counts:
        inteiro = int(count.text)
        soma = soma + inteiro
        contagem += 1
    
    print 'Count', contagem
    print 'Sum', soma