def procedimiento(caracteres):
    for numero in caracteres:
        for _ in range(numero):
            print("*", end="")
        print()

procedimiento([4,9,7])
