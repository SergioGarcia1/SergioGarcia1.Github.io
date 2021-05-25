def superposicion (lista1, lista2):
    for i in lista1:
        for j in lista2:
            if i == j:
                return True
    return False

print(superposicion([2,1,0],[3,1,3]))