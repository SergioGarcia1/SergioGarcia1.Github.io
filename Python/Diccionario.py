def add_values_in_dict(sample_dict, key, list_of_values):
    """Append multiple values to a key in the given dictionary"""
    if key not in sample_dict:
        sample_dict[key] = list()
    sample_dict[key].extend(list_of_values)
    return sample_dict


Diccionario = {
    'Id' : [1705,1706,1707,1708,1709],
    'Producto' : ['Refresco','Sopa','Servilletas','Barra de Chocolate','Sabritas'],
    'Precio' : [20,45,32,6,15],
    'Descripcion' : ['Bebida','Alimento','Producto','Alimento','Alimento']
    
}



for key in Diccionario:
    print (key, ":" , Diccionario[key]) 



print("Bienvenido, que opcion desea seleccionar")
print("A. Agregar un articulo")
print("B. Imprimir articulos")
print("C. Iniciar punto de venta")
opcion = input()

def sistema(opcion):
    if opcion == "A":
        print("Cuantos productos quiere agreagar ? : ")
        P1 = int(input())
        for x in  range(P1):
            print("Ingrese el id del producto")
            Id = input()
            print("Ingrese el nombre del producto")
            Producto = input()
            print("Ingrese el precio del producto")
            Precio = input()
            print("Ingrese la descripcion del producto")
            Descripcion = input()
            add_values_in_dict(Diccionario, 'Id', [Id])
            add_values_in_dict(Diccionario, 'Producto', [Producto])
            add_values_in_dict(Diccionario, 'Precio', [Precio])
            add_values_in_dict(Diccionario, 'Descripcion', [Descripcion])
            for key in Diccionario:
                print (key, ":" , Diccionario[key])
                print ()
        print("Desea iniciar un punto de venta? Responda: Si/No")
        P2 = input()
        if P2 == "Si":
            print("Punto de venta iniciado")
            conta = 0
            print("Cuantos productos desea comprar: ?")
            respuesta = int(input())
            for x in range(respuesta):
                print("Ingrese el codigo de barras del producto")
                id = int(input())
                for keys,values in Diccionario.items():
                    for item in values:
                        if item == id:
                            index = values.index(item)
                            venta = {'Venta':[]}
                            venta['Venta'] = Diccionario['Precio'][index]
                            for key in venta:
                                conta += venta[key]
                                print("Desea ver el registro de la venta actual? : Si o No")
                                P2 = input()
                                if P2 == "Si":
                                    print("La venta actual es de: " , conta)
                                else:
                                    continue



    elif opcion == "B":
        for key in Diccionario:
            print (key, ":" , Diccionario[key]) 

    elif opcion == "C":
            print("Punto de venta iniciado")
            contador = 0
            print("Cuantos productos desea comprar: ?")
            answer = int(input())
            for x in range(answer):
                print("Ingrese el codigo de barras de su producto")
                clave = int(input())
                for keys,values in Diccionario.items():
                    for item in values:
                        if item == clave:
                            index = values.index(item)
                            venta = {'Venta':[]}
                            venta['Venta'] = Diccionario['precio'][index]
                            for key in venta:
                                contador += venta[key]
                                print("Desea ver la venta actual? : Si o No")
                                a2 = input()
                                if a2 == "Si":
                                    print("La venta actual es de: " , contador)