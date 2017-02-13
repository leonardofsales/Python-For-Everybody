score = float(raw_input("Entre uma nota entre 0.0 e 1.0 "))
if score < 0.0 or score > 1.0:
    print("Nota esta fora dos limites")
    quit()
elif score >= 0.9:
    print("A")
elif score >= 0.8:
    print("B")
elif score >= 0.7:
    print("C")
elif score >= 0.6:
    print("D")
elif score < 0.6:
    print("F")


