var indicador = false; 
var turnos = 0;
var tablero1 = new Array();

window.onload=function(){
var inicia = document.getElementById("BtnIniciar")
inicia.addEventListener("click", start);


}
function start(){

indicador = true;
var jugador1= document.getElementById("Jugador1")
var jugador2= document.getElementById("Jugador2")
if(jugador1.value==""){

alert("Ingresa nombre del Jugador 1")
jugador1.focus();


}else{

if (jugador2.value=="") {
    
    alert("Ingresa nombre del Jugador 2");
jugador2.focus();
}else{

tablero1[0] = document.getElementById("Btn0")
tablero1[1] = document.getElementById("Btn1")
tablero1[2] = document.getElementById("Btn2")
tablero1[3] = document.getElementById("Btn3")
tablero1[4] = document.getElementById("Btn4")
tablero1[5] = document.getElementById("Btn5")
tablero1[6] = document.getElementById("Btn6")
tablero1[7] = document.getElementById("Btn7")
tablero1[8] = document.getElementById("Btn8")
for(var i=0; i<9; i++){

tablero1[i].className = "botonInicial";
tablero1[i].value = "I";

}
turnos= 1;
document.getElementById("turno").innerHTML ="Adelante Jugador" + jugador1.value;
             }

         }

  }

function Colocar(boton){
if(indicador==true){
if(turnos==1 && boton.value== "I")
{
turnos = 2;
document.getElementById("turno").innerHTML = "Adelante Jugador" + jugador2.value
boton.value = "X";
boton.className = "botonJugador1";

         }else{
               if(turnos==2 && boton.value== "I"){
                turnos = 1;
                document.getElementById("turno").innerHTML = "Adelante Jugador" + jugador1.value
                boton.value = "O";
                boton.className = "botonJugador2";


               }
      

         }
  
     }
revisar();





} 

function revisar(){
if ((tab[0].value =="X" && tablero1[1].value=="X" && tablero1[2].value=="X")

||(tab[3].value =="X" && tablero1[4].value=="X" && tablero1[5].value=="X")
||(tab[6].value =="X" && tablero1[7].value=="X" && tablero1[8].value=="X")
||(tab[0].value =="X" && tablero1[3].value=="X" && tablero1[6].value=="X")
||(tab[1].value =="X" && tablero1[4].value=="X" && tablero1[7].value=="X")
||(tab[2].value =="X" && tablero1[5].value=="X" && tablero1[8].value=="X")
||(tab[0].value =="X" && tablero1[4].value=="X" && tablero1[8].value=="X")
||(tab[2].value =="X" && tablero1[4].value=="X" && tablero1[6].value=="X")




) {
alert("Felicidades ganaste Jugador" + jugador1.value);
indicador=false;

}
if ((tab[0].value =="O" && tablero1[1].value=="O" && tablero1[2].value=="O")

||(tab[3].value =="O" && tablero1[4].value=="O" && tablero1[5].value=="O")
||(tab[6].value =="O" && tablero1[7].value=="O" && tablero1[8].value=="O")
||(tab[0].value =="O" && tablero1[3].value=="O" && tablero1[6].value=="O")
||(tab[1].value =="O" && tablero1[4].value=="O" && tablero1[7].value=="O")
||(tab[2].value =="O" && tablero1[5].value=="O" && tablero1[8].value=="O")
||(tab[0].value =="O" && tablero1[4].value=="O" && tablero1[8].value=="O")
||(tab[2].value =="O" && tablero1[4].value=="O" && tablero1[6].value=="O")




) {
alert("Felicidades ganaste Jugador" + jugador2.value);
indicador=false;

}


}