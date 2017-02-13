def computepay(horas, preco):
        horas1 = float(horas)
        preco1 = float(preco)
        if horas1 >= 40:
                extra_horas = horas1 - 40
                extra_preco = preco1 * 1.5
                pagamento = (40 * preco1) + (extra_horas * extra_preco)
        else:
                pagamento = horas1 * preco1
        return pagamento

horas = raw_input("Quantas horas trabalhadas? ")
horas1 = float(horas)
preco = raw_input("Qual preco da hora? ")
preco1 = float(preco)
print(computepay(horas1, preco1))