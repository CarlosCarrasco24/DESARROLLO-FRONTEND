console.log("reloj3.js cargado....");

// Ahora cada reloj pondrá su nombre cuando muestre la hora
// ejmplo:   rolex: 00:02:25

function Reloj(nombre){

    this.tiempoTotal = 0;
    this.intervalId = undefined;
    this.sentido = 1;
    this.nombre = nombre;

    this.start = function(){
        
        var self = this;

        self.intervalId = setInterval(function(){
        
            self.tiempoTotal += self.sentido;
            self.horas = ("0" + Math.floor(self.tiempoTotal / 3600)).slice(-2);
            self.minutos = ("0" + Math.floor(self.tiempoTotal / 60 % 60)).slice(-2);
            self.segundos = ("0" + self.tiempoTotal % 60).slice(-2);
            console.log(`${self.nombre}:${self.horas}:${self.minutos}:${self.segundos}`);

        },1000);
    }

    this.pause = function(){
        clearInterval(this.intervalId);
    }

    this.resume = function(){
        this.start();
    }
   
}
var reloj1 = new Reloj("Rolex");
var reloj2 = new Reloj("Gucci");