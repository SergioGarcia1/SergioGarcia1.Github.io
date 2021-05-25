def sum(numeros):
    suma = 0
    for numero in numeros:
        suma += numero

    return suma

def multip(numeros):
    resultado = 1
    for numero in numeros:
        resultado *= numero

    return resultado

print(sum([1,2,3,4]), multip([2,2,3,4]))
