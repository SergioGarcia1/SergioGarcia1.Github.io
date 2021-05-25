def palindromo(cadena):
    resultado=""
    for letra in cadena:
        resultado = letra+resultado
        
    if cadena == resultado:
        return True
    else:
        return False

print(palindromo("anitalavalatina"))