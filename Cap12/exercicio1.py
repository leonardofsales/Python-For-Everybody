import socket
import re

url_full = raw_input('Digite uma URL para leitura: ')

# Colocar teste de validade da URl (formatacao)

clean = re.findall('http://(.+?)/', url_full)

url = clean[0]

print url

mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Colocar teste de validade da URL (conexso)
# if mysock.connect((url, 80)) is False:
#    print('Nao consegui conexao com o host')
    


# mysock.connect((clean[0], 80))
# cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\n\n'.encode()
# mysock.send(cmd)

# while True:
#     data = mysock.recv(512)
#     if (len(data) < 1):
#         break
#     print(data.decode())
# mysock.close()