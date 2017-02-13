import re
s = 'A message from csev@umich.edu to cwen@iupui.edu about meeting @2PM'
lst = re.findall('\S+@\S+', s) # \S+ qualquer numero de caracteres que nao sejam espaco em branco || findall retorna uma lista
print(lst)