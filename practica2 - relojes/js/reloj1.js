console.log("reloj 1 cargado...");

var tiempoTotal = 0;
var sentido = 1;
var intervalId = undefined;

function start(){
    intervalId = setInterval(function(){
                
        tiempoTotal += sentido;

        let horas = ("0" + Math.floor(tiempoTotal / 3600)).slice(-2);
        let minutos = ("0" + Math.floor(tiempoTotal / 60 % 60)).slice(-2);
        let segundos = ("0" + tiempoTotal % 60).slice(-2);

        console.log(`${horas}:${minutos}:${segundos}`);
                
    },1000);
}

function pause(){
    clearInterval(intervalId);
}

function resume(){
    start();
}

function invert(){
    sentido *= -1; 
}

function reset(){
    clearInterval(intervalId);
    tiempoTotal = 0;
}