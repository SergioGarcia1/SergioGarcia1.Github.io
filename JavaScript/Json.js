function ajason()
{
let valornombre = document.querySelector("#nombre").value;
let valorapellido = document.querySelector("#apellido").value;
let valoredad = document.querySelector("#edad").value;
let valoremail = document.querySelector("#email").value;

let objeto = {

    nombre :valornombre,
    apellido : valorapellido,
    edad :valoredad,
    email: valoremail


};

document.querySelector("#Mostrar").value = JSON.stringify(objeto);



}
document.querySelector("#btniniciar").addEventListener("click", ajason);




function aFormulario(){

let Jasonstring = document.querySelector("#Mostrar").value
let objeto = JSON.parse(Jasonstring);
document.querySelector("#nombre").value = objeto.nombre;
document.querySelector("#apellido").value = objeto.apellido;
document.querySelector("#edad").value = objeto.edad;
document.querySelector("#email").value = objeto.email;


}
document.querySelector("#btniniciarF").addEventListener("click",aFormulario);