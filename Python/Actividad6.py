def inversa(cadena):
    resultado=""
    for letra in cadena:
        resultado = letra+resultado

    return resultado

print(inversa("estoy probando"))