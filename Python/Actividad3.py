def calcularlongitud(cadena):
    contador = 0
    for c in cadena:
        contador += 1
    return contador 

texto = "Hola a todos"
print(calcularlongitud(texto))