count = 0
total = 0
while True:
    num = raw_input("Enter a number: ")
    if num == "done" : break
    try:
        num1 = float(num)
    except:
        print("Nao e um numero")
        continue
    count = count + 1
    total = total + num1
print total, count, total/count