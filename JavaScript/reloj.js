(function(){

var actualizarHora = function(){
var fecha = new Date(),
horas=fecha.getHours(),
AmPm,
minutos=fecha.getMinutes(),
segundos=fecha.getSeconds(),
diaSemana=fecha.getDay(),
dia= fecha.getDate(),
mes=fecha.getMonth(),
año=fecha.getFullYear();

var pdiaSemana = document.getElementById('diaSemana')
var pDia = document.getElementById('Dia')
var pMes = document.getElementById('Mes')
var pAño = document.getElementById('Año')
var pHoras = document.getElementById('horas')
var pMinutos = document.getElementById('Minutos')
var pAmPm = document.getElementById('AmPm')
var pSegundos = document.getElementById('Segundos')

var semana =['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
pdiaSemana.textContent = semana[diaSemana];

pDia.textContent = dia;
var meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
pMes.textContent = meses[mes];

pAño.textContent=año;

if (horas >=12) {
    horas= horas-12;
    AmPm = 'PM'

}else {
AmPm= 'AM';

}

if (horas==0) {
    horas=12;
    
}

pHoras.textContent = horas;
pAmPm.textContent =  AmPm;


if (minutos < 10) { minutos = "0" + minutos };
    if (segundos<10) { segundos = "0" + segundos};
  
        
    
        
    

pMinutos.textContent = minutos;
pSegundos.textContent = segundos;





};






    




actualizarHora();
var intervalo = setInterval(actualizarHora , 1000)




}())



h = 0; m = 0; s = 0; mls = 0; timeStarted= 0;
tiempo = document.getElementById("tiempo");
BtnIF = document.getElementById("BtnIF");
BtnR = document.getElementById("BtnR");
event();

function event(){
BtnIF.addEventListener("click", start); 
BtnIF.addEventListener("click" , stop)
BtnR.addEventListener("click", reset);   
}
function escribir(){
let ht, mt, st, mlst;
mls++;

if (mls > 99){ s++ ; mls= 0; }
if (s > 59){ m++; s= 0;}
if (m > 59){ h++; m= 0;}
if (h > 24) h= 0;

mlst = ('0' + mls).slice(-2);
st = ('0' + s).slice(-2);
mt = ('0' + m).slice(-2);
ht = ('0' + h).slice(-2);

tiempo.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
}
function start(){
escribir();
timeStarted = setInterval(escribir, 10);
BtnIF.removeEventListener("click", start);
}

function stop(){
    clearInterval(timeStarted);
    BtnIF.addEventListener("click", start);
}

function reset(){   
   clearInterval(timeStarted)   
   tiempo.innerHTML = "00:00:00.00"
   h= 0; m= 0 ; s= 0; mls= 0;
   BtnIF.addEventListener("click", start);
}

