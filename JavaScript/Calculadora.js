function Limpiar(){

document.getElementById('Conversiones').reset();



}

function ConvertirF(){

    var x = parseInt(document.getElementById('entrada').value);
 document.getElementById('resultado').innerHTML= (x*1.8)+32
}

function ConvertirC(){

    var x = parseInt(document.getElementById('entrada').value);
    document.getElementById('resultado').innerHTML= (x-32)*0.5555
 
}
function ConvertirKm(){

    var x = parseInt(document.getElementById('entrada').value);
    document.getElementById('resultado').innerHTML= (x/1000)
}
function ConvertirM(){

    var x = parseInt(document.getElementById('entrada').value);
    document.getElementById('resultado').innerHTML= (x*1000)
}